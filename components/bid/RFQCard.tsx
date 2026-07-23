import { Clock, MapPin, Building2 } from 'lucide-react';

interface RFQCardProps {
  id: string;
  title: string;
  location: string;
  company: string;
  deadline: string;
  currentBid: number;
  yourBid?: number;
  rank?: number;
  onBidChange?: (value: number) => void;
  onPlaceBid?: () => void;
  isDemo?: boolean;
}

const competitorNames = [
  'Sri Lakshmi Traders', 'Deccan Supply Co.', 'Apex Buildmat',
  'Metro Cement', 'Pragati Enterprises', 'Vijay Tiles',
  'Sai Traders', 'Rockwell Materials', 'Nizam Distributors',
];

export function RFQCard({ id, title, location, company, deadline, currentBid, yourBid, rank, onBidChange, onPlaceBid, isDemo }: RFQCardProps) {
  const competitorCount = 2 + (id.charCodeAt(id.length - 1) % 2);
  const randomCompetitors = competitorNames.slice(0, competitorCount);

  return (
    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] p-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-serif text-base font-bold text-[var(--color-text-main)]">{title}</h3>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">{id}</p>
        </div>
        <span className="px-2 py-1 text-[9px] font-mono uppercase tracking-wider bg-[var(--color-primary-10)] text-[var(--color-primary)] rounded shrink-0">
          {isDemo ? 'Demo' : 'Live'}
        </span>
      </div>

      <div className="flex flex-wrap gap-4 text-xs text-[var(--color-text-secondary)] mb-4">
        <span className="flex items-center gap-1"><MapPin size={12} /> {location}</span>
        <span className="flex items-center gap-1"><Building2 size={12} /> {company}</span>
        <span className="flex items-center gap-1"><Clock size={12} /> {deadline}</span>
      </div>

      <div className="p-4 rounded-lg bg-[var(--color-bg-surface-alt)] mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)]">Current Lowest Bid</span>
          <span className="font-serif text-lg font-extrabold text-[var(--color-primary)]">₹{currentBid.toLocaleString()}</span>
        </div>
        {rank && (
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)]">Your Rank</span>
            <span className="font-serif text-lg font-extrabold text-[var(--color-primary)]">#{rank}</span>
          </div>
        )}
      </div>

      {onBidChange && (
        <div className="space-y-3">
          <div>
            <label className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] block mb-1">Your Bid (₹)</label>
            <input
              type="number"
              value={yourBid || ''}
              onChange={(e) => onBidChange(Number(e.target.value))}
              className="w-full bg-[var(--color-bg-surface-alt)] border border-[var(--color-border-light)] rounded-lg px-4 py-2.5 text-sm text-[var(--color-text-main)] outline-none focus:border-[var(--color-primary)]"
              placeholder="Enter your all-inclusive price"
            />
          </div>
          <button
            onClick={onPlaceBid}
            className="w-full py-2.5 text-xs font-medium bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            Submit Bid
          </button>
        </div>
      )}

      {isDemo && (
        <div className="mt-4 pt-4 border-t border-[var(--color-border-light)]">
          <p className="text-[10px] text-[var(--color-text-muted)] mb-2">Demo competitors:</p>
          <div className="space-y-1">
            {randomCompetitors.map((name, i) => (
              <div key={i} className="flex justify-between text-[10px]">
                <span className="text-[var(--color-text-muted)]">{name}</span>
                <span className="text-[var(--color-text-secondary)]">₹{(currentBid + (i + 1) * 500).toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
