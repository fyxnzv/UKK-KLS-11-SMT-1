import React from 'react';
import { Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-14 pb-8 text-slate-600">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2 text-lg font-extrabold text-slate-900">
              <span>ScribeAI</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              Asisten rapat cerdas berbasis AI untuk transkripsi otomatis, notulensi terstruktur, dan pelacakan action item tim modern.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-900">Produk</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="/fitur" className="hover:text-indigo-600">Transkripsi Real-Time</a></li>
              <li><a href="/fitur" className="hover:text-indigo-600">AI Smart Summary</a></li>
              <li><a href="/integrasi" className="hover:text-indigo-600">Integrasi Aplikasi</a></li>
              <li><a href="/harga" className="hover:text-indigo-600">Paket Harga</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-900">Perusahaan</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="/tentang-kami" className="hover:text-indigo-600">Tentang Kami</a></li>
              <li><a href="/keamanan-data" className="hover:text-indigo-600">Keamanan Data</a></li>
              <li><a href="/kebijakan-privasi" className="hover:text-indigo-600">Kebijakan Privasi</a></li>
              <li><a href="/hubungi-kami" className="hover:text-indigo-600">Hubungi Kami</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-900">Berlangganan Update</h4>
            <p className="mb-3 text-xs text-slate-500">Dapatkan tips produktivitas dan pembaruan fitur ScribeAI.</p>
            <div className="flex items-center gap-1.5">
              <input
                type="email"
                placeholder="Email kerja Anda"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs outline-none focus:border-indigo-500"
              />
              <button className="rounded-lg bg-indigo-600 p-2 text-white hover:bg-indigo-700">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className=" flex flex-col items-center justify-between border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 ScribeAI Indonesia. Hak Cipta Dilindungi.</p>
          <div className="mt-2 flex gap-4 sm:mt-0">
            <span>Syarat & Ketentuan</span>
            <span>Privasi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}