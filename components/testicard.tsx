import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  initials: string;
  avatarBg: string;
}

export default function TestiCard({ quote, author, role, initials, avatarBg }: TestimonialCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div>
        <div className="mb-3 flex gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="mb-6 text-sm italic leading-relaxed text-slate-600">&ldquo;{quote}&rdquo;</p>
      </div>
      <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
        <div className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${avatarBg}`}>
          {initials}
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900">{author}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
}