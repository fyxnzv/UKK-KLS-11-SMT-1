import React from 'react';

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  tag: string;
}

export default function StepCard({ stepNumber, title, description, tag }: StepCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div>
        <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
          {stepNumber}
        </div>
        <h3 className="mb-2 text-base font-bold text-slate-900">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-500">{description}</p>
      </div>
      <div className="rounded-md bg-indigo-50/70 px-3 py-1.5 text-xs font-medium text-indigo-600">
        {tag}
      </div>
    </div>
  );
}