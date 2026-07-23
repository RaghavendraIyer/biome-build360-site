import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { inflateSync, deflateSync } from 'zlib';

const SRC = 'Category thumbnails combined.png';
const OUT = 'public/images/categories';

const data = readFileSync(SRC);

function readU32(buf, off) { return buf.readUInt32BE(off); }

function parsePNG(buf) {
  const sig = buf.slice(0, 8);
  let off = 8;
  const chunks = [];
  while (off < buf.length) {
    const len = readU32(buf, off);
    const type = buf.toString('ascii', off + 4, off + 8);
    const data_ = buf.slice(off + 8, off + 8 + len);
    chunks.push({ type, data: data_ });
    off += 12 + len;
  }
  return { sig, chunks };
}

function makePNG({ sig, chunks }) {
  const parts = [sig];
  for (const c of chunks) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(c.data.length);
    const type = Buffer.from(c.type, 'ascii');
    const crcData = Buffer.concat([type, c.data]);
    const crc = crc32(crcData);
    const crcB = Buffer.alloc(4);
    crcB.writeUInt32BE(crc);
    parts.push(len, type, c.data, crcB);
  }
  return Buffer.concat(parts);
}

function crc32(buf) {
  let c = 0xffffffff;
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let x = n;
    for (let k = 0; k < 8; k++) x = (x & 1) ? (0xedb88320 ^ (x >>> 1)) : (x >>> 1);
    table[n] = x;
  }
  for (let i = 0; i < buf.length; i++) c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function paeth(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) return a;
  if (pb <= pc) return b;
  return c;
}

function unfilter(bpp, filterType, row, prevRow) {
  const out = Buffer.from(row);
  for (let i = 0; i < row.length; i++) {
    const a = i >= bpp ? out[i - bpp] : 0;
    const b = prevRow ? prevRow[i] : 0;
    const c = (i >= bpp && prevRow) ? prevRow[i - bpp] : 0;
    switch (filterType) {
      case 0: break;
      case 1: out[i] = (out[i] + a) & 0xff; break;
      case 2: out[i] = (out[i] + b) & 0xff; break;
      case 3: out[i] = (out[i] + Math.floor((a + b) / 2)) & 0xff; break;
      case 4: out[i] = (out[i] + paeth(a, b, c)) & 0xff; break;
      default: throw new Error(`Unknown filter ${filterType}`);
    }
  }
  return out;
}

function getBytesPerPixel(colorType) {
  switch (colorType) {
    case 0: return 1; // grayscale
    case 2: return 3; // RGB
    case 3: return 1; // indexed
    case 4: return 2; // grayscale + alpha
    case 6: return 4; // RGBA
    default: throw new Error(`Unknown colorType ${colorType}`);
  }
}

const png = parsePNG(data);

const ihdr = png.chunks.find(c => c.type === 'IHDR');
const width = readU32(ihdr.data, 0);
const height = readU32(ihdr.data, 4);
const bitDepth = ihdr.data[8];
const colorType = ihdr.data[9];

const bpp = getBytesPerPixel(colorType);
const scanlineLen = width * bpp + 1; // +1 for filter byte

const idatData = Buffer.concat(png.chunks.filter(c => c.type === 'IDAT').map(c => c.data));
const raw = inflateSync(idatData);

const rows = [];
let rp = 0;
let prev = null;
for (let y = 0; y < height; y++) {
  const filterType = raw[rp];
  const rowData = raw.slice(rp + 1, rp + 1 + width * bpp);
  const unfiltered = unfilter(bpp, filterType, rowData, prev);
  rows.push(unfiltered);
  prev = unfiltered;
  rp += scanlineLen;
}

const cellW = 468;
const cellH = 256;
const gap = 2;

function crop(cx, cy) {
  const cropped = Buffer.alloc((cellW * bpp + 1) * cellH);
  for (let y = 0; y < cellH; y++) {
    const srcY = cy + y;
    if (srcY >= height) break;
    const srcRow = rows[srcY];
    const dstOffset = y * (cellW * bpp + 1);
    cropped[dstOffset] = 0; // filter byte = None
    for (let x = 0; x < cellW; x++) {
      const srcX = cx + x;
      if (srcX >= width) break;
      for (let b = 0; b < bpp; b++) {
        cropped[dstOffset + 1 + x * bpp + b] = srcRow[srcX * bpp + b];
      }
    }
  }

  const compressed = deflateSync(cropped);

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(cellW, 0);
  ihdrData.writeUInt32BE(cellH, 4);
  ihdrData[8] = bitDepth;
  ihdrData[9] = colorType;
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace

  return makePNG({
    sig: png.sig,
    chunks: [
      { type: 'IHDR', data: ihdrData },
      { type: 'IDAT', data: compressed },
      { type: 'IEND', data: Buffer.alloc(0) },
    ],
  });
}

mkdirSync(OUT, { recursive: true });

const categories = [
  'tile-adhesives', 'cement-concrete', 'steel-tmt',
  'blocks-bricks', 'finishing-supplies', 'waterproofing-sealants',
  'water-treatment', 'power-backups', 'plumbing-sanitaryware',
];

let idx = 0;
for (let r = 0; r < 3; r++) {
  for (let c = 0; c < 3; c++) {
    const cx = c * (cellW + gap);
    const cy = r * (cellH + gap);
    const outBuf = crop(cx, cy);
    const name = categories[idx];
    writeFileSync(`${OUT}/${name}.png`, outBuf);
    console.log(`  ${name}.png  (${cx},${cy})  ${cellW}x${cellH}`);
    idx++;
  }
}

console.log(`\nDone — 9 images written to ${OUT}/`);
