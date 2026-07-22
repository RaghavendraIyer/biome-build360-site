'use client';

import { useState } from 'react';
import { RFQCard } from './RFQCard';

interface RFQ {
  id: string;
  title: string;
  location: string;
  company: string;
  deadline: string;
  currentBid: number;
  yourBid?: number;
  rank?: number;
}

const initialRFQs: RFQ[] = [
  { id: 'RFQ-2241', title: 'UltraTech Tilefixo Sumo CT — 200 Bags', location: 'Gachibowli, Hyderabad', company: 'Sri Lakshmi Traders', deadline: '2d 14h', currentBid: 124500 },
  { id: 'RFQ-2242', title: 'MYK Laticrete 111+73 — 150 Bags', location: 'Madhapur, Hyderabad', company: 'Deccan Supply Co.', deadline: '3d 8h', currentBid: 89200 },
  { id: 'RFQ-2243', title: 'Weber Set Classic — 300 Bags', location: 'Kokapet, Hyderabad', company: 'Apex Buildmat', deadline: '5d 2h', currentBid: 156800 },
  { id: 'RFQ-2244', title: 'STYLE 2K Epoxy Grout — 50 Units', location: 'Shamshabad, Hyderabad', company: 'Metro Cement', deadline: '1d 6h', currentBid: 215000 },
];

export function VendorDashboard() {
  const [rfqs, setRfqs] = useState(initialRFQs);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    setRfqs(prev => prev.map(rfq => ({
      ...rfq,
      yourBid: rfq.currentBid + 2000,
      rank: 3,
    })));
  };

  const handleBidChange = (id: string, value: number) => {
    setRfqs(prev => prev.map(rfq =>
      rfq.id === id ? { ...rfq, yourBid: value } : rfq
    ));
  };

  const handlePlaceBid = (id: string) => {
    setRfqs(prev => prev.map(rfq => {
      if (rfq.id !== id || !rfq.yourBid) return rfq;
      const newRank = rfq.yourBid < rfq.currentBid ? 1 : Math.floor(Math.random() * 4) + 2;
      return { ...rfq, currentBid: Math.min(rfq.currentBid, rfq.yourBid), rank: newRank };
    }));
  };

  if (!loggedIn) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-[var(--color-border-light)]">
        <div>
          <h3 className="font-serif text-xl font-extrabold text-[var(--color-text-main)]">Vendor Dashboard</h3>
          <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mt-1">Demo Account</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          {[
            { label: 'Time Saved', value: '90%' },
            { label: 'Cost Savings', value: '5-10%' },
            { label: 'Margin Range', value: '8-12%' },
            { label: 'Your Rank', value: '#1' },
          ].map((stat) => (
            <div key={stat.label} className="bg-[var(--color-bg-surface-alt)] border border-[var(--color-border-light)] rounded-[var(--radius)] px-4 py-3 text-center min-w-[80px]">
              <strong className="block font-serif text-lg font-extrabold text-[var(--color-primary)]">{stat.value}</strong>
              <span className="text-[8px] font-mono uppercase tracking-wider text-[var(--color-text-muted)]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <h4 className="font-serif text-base font-bold text-[var(--color-text-main)]">Live RFQ Board</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rfqs.map((rfq) => (
          <RFQCard
            key={rfq.id}
            id={rfq.id}
            title={rfq.title}
            location={rfq.location}
            company={rfq.company}
            deadline={rfq.deadline}
            currentBid={rfq.currentBid}
            yourBid={rfq.yourBid}
            rank={rfq.rank}
            onBidChange={(v) => handleBidChange(rfq.id, v)}
            onPlaceBid={() => handlePlaceBid(rfq.id)}
            isDemo
          />
        ))}
      </div>
    </div>
  );
}
