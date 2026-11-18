import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
  title: string;
  description: string;
  badgeText: string;
}

export default function FeatureCard({
  icon: Icon,
  iconBgColor,
  iconColor,
  title,
  description,
  badgeText,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div>
        <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${iconBgColor} ${iconColor}`}>
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-slate-500">{description}</p>
      </div>
      <div className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-indigo-600">
        {badgeText}
      </div>
    </div>
  );
}