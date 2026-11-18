import React from 'react';
import Link from 'next/link';
import { User } from 'lucide-react'; 

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-extrabold text-slate-900">
          <span>ScribeAI</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/fitur" className="hover:text-indigo-600">Fitur Utama</Link>
          <Link href="/cara-kerja" className="hover:text-indigo-600">Cara Kerja</Link>
          <Link href="/integrasi" className="hover:text-indigo-600">Integrasi</Link>
          <Link href="/testimoni" className="hover:text-indigo-600">Testimoni</Link>
          <Link href="/harga" className="hover:text-indigo-600">Harga</Link>
          <Link href="/faq" className="hover:text-indigo-600">FAQ</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="text-sm font-semibold text-slate-700 hover:text-indigo-600">Masuk</button>
          <button className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
            <span>Mulai Gratis</span>
          </button>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
            <User className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
}