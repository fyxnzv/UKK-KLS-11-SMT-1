import React from 'react';
import { Sparkles, CheckCircle2, Mic, Send, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl sm:p-6 text-left">
      {/* Top Window Bar */}
      <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-2 text-xs font-medium text-slate-400">scribeai.app/meeting/sprint-planning-q3</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-0.5 text-xs font-semibold text-rose-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-600" /> REC 42:15
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-600">
            <Lock className="h-3 w-3" /> SOC-2 Encrypted
          </span>
        </div>
      </div>

      {/* Main Split Content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left: Live Transcript */}
        <div className="space-y-3 lg:col-span-7">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                Rapat Sprint Planning Q3 <span className="text-xs font-normal text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">Google Meet</span>
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">5 Peserta Aktif • Bahasa Campuran (ID/EN)</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-600">Budi Santoso <span className="text-[10px] font-normal text-slate-500 bg-slate-200/70 px-1.5 py-0.5 rounded ml-1">Product Lead</span></span>
                <span className="text-[11px] text-slate-400">09:12</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-600">
                &ldquo;Oke tim, untuk fitur payment gateway baru, kita pastikan sprint ini PRD sudah disetujui sama compliance. Dimas, bisakah wireframe checkout revamp selesai sebelum hari Jumat?&rdquo;
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-600">Dimas Ramadhan <span className="text-[10px] font-normal text-slate-500 bg-slate-200/70 px-1.5 py-0.5 rounded ml-1">UI Designer</span></span>
                <span className="text-[11px] text-slate-400">09:14</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-600">
                &ldquo;Siap Mas Budi. Saya sudah siapkan 2 varian flow. Nanti Kamis sore kita adakan design review singkat 15 menit biar langsung lock sebelum freeze sprint.&rdquo;
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-bold text-amber-600">Sarah Jenkins <span className="text-[10px] font-normal text-slate-500 bg-slate-200/70 px-1.5 py-0.5 rounded ml-1">Tech Lead</span></span>
                <span className="text-[11px] text-slate-400">09:20</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-600">
                &ldquo;Dari sisi backend, integrasi API webhook mandiri butuh staging environment baru. Saya akan minta DevOps prepare sebelum Senin.&rdquo;
              </p>
            </div>
          </div>

          {/* Audio Waveform Bar */}
          <div className="flex items-center justify-between rounded-xl border border-indigo-100 bg-indigo-50/50 px-4 py-2.5">
            <div className="flex items-center gap-2 text-xs font-medium text-indigo-700">
              <Mic className="h-4 w-4" />
              <span>Speaker: Dimas</span>
            </div>
            <div className="flex items-center gap-1">
              {[40, 80, 55, 95, 65, 35, 75, 50, 85, 45].map((h, i) => (
                <span key={i} style={{ height: `${h / 4}px` }} className="w-1 rounded-full bg-indigo-500" />
              ))}
            </div>
            <span className="text-[11px] text-indigo-600 font-semibold">45:00</span>
          </div>
        </div>

        {/* Right: AI Smart Summary */}
        <div className="flex flex-col justify-between rounded-xl border border-slate-100 bg-slate-50/60 p-4 lg:col-span-5">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-sm font-bold text-slate-900">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                <span>AI Smart Summary</span>
              </div>
              <span className="text-[10px] bg-indigo-100 text-indigo-700 font-semibold px-2 py-0.5 rounded">Ringkas dalam 2 Detik</span>
            </div>

            <div className="mb-3 rounded-lg bg-white p-3 shadow-xs border border-slate-100">
              <p className="mb-1 text-xs font-bold text-slate-800">Keputusan Utama:</p>
              <ul className="list-inside list-disc space-y-1 text-xs text-slate-600">
                <li>Peluncuran fitur Payment Gateway ditargetkan selesai akhir Sprint 14.</li>
                <li>Review desain antarmuka checkout dijadwalkan Kamis jam 16.00 WIB.</li>
                <li>DevOps akan setup staging environment khusus untuk API webhook Mandiri.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-slate-800">Action Items Otomatis:</p>
                <span className="text-[10px] text-slate-500">3 Tugas Baru</span>
              </div>
              
              <div className="flex items-center justify-between rounded-lg bg-white p-2.5 text-xs shadow-xs border border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Revamp UI Checkout Flow</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-slate-500">Dimas</span>
                  <span className="rounded bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-600">Due: Jumat</span>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-white p-2.5 text-xs shadow-xs border border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Finalisasi PRD Compliance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-slate-500">Budi</span>
                  <span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">Due: Senin</span>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-white p-2.5 text-xs shadow-xs border border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Provision Staging Env Mandiri</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-slate-500">Sarah</span>
                  <span className="rounded bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-600">Due: Rabu</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
              <span>Sentimen Diskusi: <strong className="text-emerald-600">Sangat Positif (98%)</strong></span>
              <span className="text-indigo-600 font-semibold cursor-pointer">Ekspor ke Notion ↗</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <input
                type="text"
                readOnly
                value="Tanya AI: 'Apa deadline desain checkout?'"
                className="w-full bg-transparent text-xs text-slate-600 outline-none"
              />
              <button className="rounded-md bg-indigo-600 p-1.5 text-white">
                <Send className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}