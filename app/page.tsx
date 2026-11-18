'use client';

import React, { useState } from 'react';
import {
  Mic, FileText, CheckSquare, Globe, ShieldCheck, Share2,
  Play, Sparkles, Video, MessageSquare, Calendar, CheckCircle2, Star, ChevronDown, X, Check
} from 'lucide-react';
import Hero from '@/components/hero';
import FeatureCard from '@/components/featurecard';
import StepCard from '@/components/stepcard';
import TestiCard from '@/components/testicard';

const features = [
  {
    icon: Mic,
    iconBgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    title: 'Transkripsi Multi-Bahasa Presisi Tinggi',
    description: 'Mengenali Bahasa Indonesia baku, slang percakapan ("Jaksel style"), istilah teknis industri digital, serta peralihan instan ke Bahasa Inggris dengan tingkat akurasi 98.8%.',
    badgeText: 'Speech-to-Text: "Follow-up PRD sprint kemarin udah di-approve mini..."',
  },
  {
    icon: FileText,
    iconBgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    title: 'Ekstraksi Action Items & Keputusan',
    description: 'AI otomatis membedakan obrolan santai dari keputusan strategis. Tugas secara cerdas disematkan ke nama PIC lengkap beserta estimasi tenggat waktu.',
    badgeText: 'Zero missed assignments',
  },
  {
    icon: CheckSquare,
    iconBgColor: 'bg-sky-50',
    iconColor: 'text-sky-600',
    title: 'Chat with Meeting (Tanya AI Rapat)',
    description: 'Punya pertanyaan seputar rapat 3 minggu lalu? Cukup ketik "Berapa alokasi budget server Q3?" dan AI langsung merangkum jawaban beserta stempel waktu rekaman.',
    badgeText: '"Apa kesepakatan deadline checkout?"',
  },
  {
    icon: Calendar,
    iconBgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    title: 'Integrasi Kalender & Bot Otomatis',
    description: 'Hubungkan Google Calendar atau Microsoft Outlook. Bot ScribeAI akan otomatis hadir di link rapat Anda tanpa perlu instalasi rumit bagi para peserta.',
    badgeText: 'Sync instan dengan Google Workspace',
  },
  {
    icon: ShieldCheck,
    iconBgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
    title: 'Keamanan Enterprise SOC-2 Type II',
    description: 'Data suara dan transkrip dienkripsi dengan standar militer AES-256 saat transit dan rest. Data percakapan perusahaan Anda tidak pernah digunakan melatih model publik.',
    badgeText: 'Kepatuhan Regulasi GDPR & UU PDP',
  },
  {
    icon: Share2,
    iconBgColor: 'bg-rose-50',
    iconColor: 'text-rose-600',
    title: 'Integrasi Ekosistem Kerja Tim',
    description: 'Kirim ringkasan rapat langsung ke Slack channel, buat tiket Jira otomatis untuk engineer, atau dokumentasikan database knowledge base di Notion & Google Docs.',
    badgeText: 'Notion • Slack • Jira • Asana • Teams',
  },
];

const steps = [
  {
    stepNumber: 1,
    title: 'Hubungkan Kalender & Rapat',
    description: 'Sinkronkan Google Calendar atau Outlook Anda. Bot ScribeAI akan otomatis bergabung ke Zoom, Meet, atau Teams.',
    tag: 'Setup kurang dari 1 menit',
  },
  {
    stepNumber: 2,
    title: 'AI Merekam & Mentranskrip',
    description: 'Fokus pada diskusi Anda sementara ScribeAI mencatat percakapan, menandai pembicara, dan menangkap poin penting.',
    tag: 'Proses otomatis di latar belakang',
  },
  {
    stepNumber: 3,
    title: 'Terima Notulensi & Tugas',
    description: 'Begitu rapat berakhir, dapatkan ringkasan lengkap beserta daftar action item siap eksekusi di dashboard Anda.',
    tag: 'Siap dibagikan ke seluruh tim',
  },
];

const testimonials = [
  {
    quote: 'Hemat lebih dari 5 jam seminggu per manajer tim engineering. Notulensi yang dihasilkan jauh lebih rapi, terstruktur, dan akurat daripada catatan manual siapapun di tim kami.',
    author: 'Andi Pratama',
    role: 'Head of Engineering, Unicorn Fintech',
    initials: 'AP',
    avatarBg: 'bg-indigo-200 text-indigo-800',
  },
  {
    quote: 'Fitur Action Items otomatis membuat tim kami tidak pernah lagi melewati deadline setelah sprint retrospective. Semua orang fokus diskusi, bukan nunduk ngetik notulensi.',
    author: 'Rina Wulandari',
    role: 'VP of Product, SaaS Logistik',
    initials: 'RW',
    avatarBg: 'bg-cyan-200 text-cyan-800',
  },
  {
    quote: 'Tanya AI Rapat sangat luar biasa. Saat saya cuti 3 hari, saya bisa langsung merangkum 8 rapat penting dengan hanya mengetik 3 pertanyaan. Penghematan waktu nyata!',
    author: 'Fajar Hidayat',
    role: 'Operations Director, Retail Tech',
    initials: 'FH',
    avatarBg: 'bg-emerald-300 text-emerald-900',
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    subtitle: 'Sempurna untuk freelancer & pengguna individual.',
    priceMonthly: 'Rp 0',
    priceYearly: 'Rp 0',
    period: '/ selamanya',
    features: [
      { text: '5 jam rapat per bulan', included: true },
      { text: 'Transkripsi dasar ID & EN', included: true },
      { text: 'Ringkasan AI standar', included: true },
      { text: 'Integrasi Slack & Notion', included: false },
      { text: 'Fitur Tanya AI Rapat', included: false },
    ],
    buttonText: 'Mulai Gratis',
    isPopular: false,
  },
  {
    name: 'Pro Team',
    subtitle: 'Dirancang untuk tim agile, startup, & konsultan.',
    priceMonthly: 'Rp 189.000',
    priceYearly: 'Rp 149.000',
    period: '/ user / bulan',
    features: [
      { text: 'Rapat Tanpa Batas (Unlimited)', included: true },
      { text: 'Akurasi Premium Slang & Dialek ID', included: true },
      { text: 'Action Items & Deadline Auto-detect', included: true },
      { text: 'Tanya AI Rapat (Chat with Meeting)', included: true },
      { text: 'Ekspor ke Notion, Slack, Jira, Drive', included: true },
      { text: 'Multi-Speaker Separation Presisi', included: true },
    ],
    buttonText: 'Coba Gratis 14 Hari',
    isPopular: true,
  },
  {
    name: 'Enterprise',
    subtitle: 'Kustomisasi mendalam, keamanan tinggi & SLA.',
    priceMonthly: 'Custom',
    priceYearly: 'Custom',
    period: '',
    features: [
      { text: 'Semua fitur Pro tanpa batas', included: true },
      { text: 'Single Sign-On (SSO / SAML)', included: true },
      { text: 'Dedicated Customer Success Manager', included: true },
      { text: 'Custom Vocabulary & Jargon Khusus', included: true },
      { text: 'Opsi On-premise / Private Cloud', included: true },
      { text: 'Garansi SLA Uptime 99.9%', included: true },
    ],
    buttonText: 'Hubungi Tim Sales',
    isPopular: false,
  },
];

const faqItems = [
  {
    question: 'Apakah ScribeAI mendukung percakapan campuran Bahasa Indonesia dan Inggris?',
    answer: 'Ya, mesin pengenalan suara ScribeAI dilatih khusus untuk memahami peralihan bahasa (code-switching) antara Bahasa Indonesia dan Bahasa Inggris secara akurat.',
  },
  {
    question: 'Platform video conference apa saja yang kompatibel dengan ScribeAI?',
    answer: 'ScribeAI mendukung penuh Google Meet, Zoom, Microsoft Teams, serta memungkinkan unggah rekaman audio/video lokal (MP3, MP4, WAV).',
  },
  {
    question: 'Bagaimana keamanan dan privasi data rekaman rapat perusahaan kami?',
    answer: 'Semua data audio dan teks dienkripsi menggunakan standar AES-256 saat disimpan dan TLS 1.3 saat transit. Data rapat Anda bersifat privat dan tidak pernah dipakai untuk melatih model AI publik.',
  },
  {
    question: 'Apakah saya bisa mengedit hasil transkrip dan ringkasan secara manual?',
    answer: 'Tentu. Anda dapat menyunting teks transkrip, mengubah nama pembicara, maupun menyesuaikan daftar action item langsung di editor dashboard sebelum dibagikan.',
  },
];

export default function HomePage() {
  const [isYearly, setIsYearly] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#FAFAFB] text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-indigo-50/40 via-white to-[#FAFAFB] pt-10 pb-16 text-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-1.5 text-xs font-semibold text-indigo-600 shadow-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Teknologi AI Generatif Terbaru • Akurasi Transkrip 98.8% Bahasa Indonesia & Inggris</span>
          </div>

          <h1 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight">
            Ubah Setiap Percakapan Rapat Menjadi{' '}
            <span className="text-indigo-600">Notulensi Rapi & Action Item</span> Otomatis
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            ScribeAI mencatat, merangkum, dan menganalisis setiap diskusi di Google Meet, Zoom, dan Microsoft Teams dalam hitungan detik. Bebaskan tim Anda dari beban mencatat manual.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700">
              Coba Gratis Sekarang
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <Play className="h-4 w-4 fill-slate-700" />
              <span>Lihat Demo Interaktif (2 Menit)</span>
            </button>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
            <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">85.3k Active</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <span>4.9/5 dari 12,000+ Tim di Indonesia (GoTo, Traveloka, Telkom, Mandiri)</span>
          </div>

          <Hero />

          <div className="mt-16">
            <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
              DIPERCAYA OLEH LEBIH DARI 500+ PERUSAHAAN DAN STARTUP TERDEPAN DI ASIA TENGGARA
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-sm font-bold text-slate-600">
              <span className="flex items-center gap-1.5">🏦 Bank Mandiri</span>
              <span className="flex items-center gap-1.5">📡 Telkomsel</span>
              <span className="flex items-center gap-1.5">🛍️ Bukalapak</span>
              <span className="flex items-center gap-1.5">💳 Kredivo</span>
              <span className="flex items-center gap-1.5">🩺 Halodoc</span>
              <span className="flex items-center gap-1.5">🎓 Ruangguru</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section id="fitur" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">KECERDASAN BUATAN TANPA BATAS</span>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Mengapa Tim Produktif Memilih ScribeAI?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">
            Didesain khusus untuk ritme kerja cepat tim modern di Indonesia dengan pemahaman konteks bahasa lokal dan integrasi mulus.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
            {features.map((feat, idx) => (
              <FeatureCard key={idx} {...feat} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS SECTION */}
      <section id="cara-kerja" className="border-y border-slate-100 bg-[#F8F9FA] py-20 text-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">ALUR KERJA SIMPEL</span>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Cara Kerja Scribe AI dalam 3 Langkah Mudah
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 text-left">
            {steps.map((step) => (
              <StepCard key={step.stepNumber} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTEGRATIONS SECTION */}
      <section id="integrasi" className="py-20 bg-white text-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-10 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-12 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">EKOSISTEM TERHUBUNG</span>
              <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Bekerja Selaras dengan Tools yang Sudah Anda Gunakan
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                Tidak perlu mengubah kebiasaan kerja tim Anda. ScribeAI terintegrasi langsung dengan aplikasi meeting dan manajemen proyek favorit Anda.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Google Meet, Zoom, dan Microsoft Teams</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Kirim ringkasan otomatis ke Slack channel & Google Docs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Sinkronisasi task ke Jira, Trello, Asana, dan Notion</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 text-center">
              {[
                { name: 'Google Meet', icon: Video, color: 'text-emerald-600 bg-emerald-50' },
                { name: 'Zoom', icon: Video, color: 'text-blue-600 bg-blue-50' },
                { name: 'MS Teams', icon: MessageSquare, color: 'text-indigo-600 bg-indigo-50' },
                { name: 'Slack', icon: MessageSquare, color: 'text-purple-600 bg-purple-50' },
                { name: 'Notion', icon: FileText, color: 'text-slate-800 bg-slate-100' },
                { name: 'Jira', icon: CheckSquare, color: 'text-blue-700 bg-blue-50' },
                { name: 'Asana', icon: CheckSquare, color: 'text-rose-600 bg-rose-50' },
                { name: 'Google Docs', icon: FileText, color: 'text-blue-500 bg-blue-50' },
              ].map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-[#FAFAFB] p-4 transition hover:bg-white hover:shadow-sm"
                  >
                    <div className={`mb-2 flex h-10 w-10 items-center justify-center rounded-xl ${tool.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700">{tool.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section id="testimoni" className="py-20 bg-[#F8F9FA] text-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">KISAH SUKSES PENGGUNA</span>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Apa Kata Pemimpin Tim di Indonesia?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">
            Lihat bagaimana ScribeAI mengembalikan jam produktif bagi para engineer, product manager, dan eksekutif.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 text-left">
            {testimonials.map((item, idx) => (
              <TestiCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRICING SECTION */}
      <section id="harga" className="border-t border-slate-100 bg-white py-20 text-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">INVESTASI TRANSPARAN</span>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Paket Transparan untuk Semua Kebutuhan Tim
          </h2>
          <p className="mt-2 text-sm text-slate-500">Mulai secara gratis dan upgrade kapan saja saat tim Anda berkembang.</p>

          <div className="mt-8 inline-flex items-center rounded-full bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setIsYearly(false)}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition ${
                !isYearly ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Bulanan
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-semibold transition ${
                isYearly ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Tahunan</span>
              <span className={`rounded-full px-2 py-0.5 text-[10px] ${isYearly ? 'bg-emerald-500 text-white' : 'bg-emerald-100 text-emerald-800'}`}>
                Hemat 20%
              </span>
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 items-stretch gap-7 lg:grid-cols-3 text-left">
            {pricingPlans.map((plan, idx) => {
              const currentPrice = isYearly ? plan.priceYearly : plan.priceMonthly;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col justify-between rounded-2xl bg-[#FAFAFB] p-7 transition ${
                    plan.isPopular
                      ? 'border-2 border-indigo-600 shadow-xl ring-4 ring-indigo-50 bg-white'
                      : 'border border-slate-200/80 shadow-sm'
                  }`}
                >
                  {plan.isPopular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                      Paling Populer
                    </span>
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                    <p className="mt-1 text-xs text-slate-500">{plan.subtitle}</p>
                    <div className="my-5 flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-slate-900">{currentPrice}</span>
                      <span className="text-xs text-slate-500">{plan.period}</span>
                    </div>
                    <ul className="mb-8 space-y-3">
                      {plan.features.map((item, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-sm text-slate-600">
                          {item.included ? (
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          ) : (
                            <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                          )}
                          <span className={item.included ? 'text-slate-700' : 'text-slate-400'}>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className={`w-full rounded-xl py-2.5 text-sm font-semibold transition ${
                      plan.isPopular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'border border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section id="faq" className="py-20 bg-[#F8F9FA] text-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">FAQ</span>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Pertanyaan yang Sering Diajukan
          </h2>

          <div className="mt-10 mx-auto max-w-3xl space-y-3 text-left">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="overflow-hidden rounded-xl border border-slate-200/80 bg-white">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    <span>{item.question}</span>
                    <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 py-3.5 text-sm leading-relaxed text-slate-600">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section> 

      {/* 8. BOTTOM CTA BANNER */}
      <section className="pb-20 bg-white text-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-teal-500 px-6 py-14 text-white shadow-xl sm:px-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-100">
              MULAI TRANSFORMASI RAPAT ANDA
            </span>
            <h2 className="mx-auto mt-2 max-w-2xl text-2xl font-extrabold sm:text-4xl">
              Siap Tingkatkan Efisiensi Rapat Tim Anda Hingga 80%?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-indigo-100">
              Bergabung dengan ribuan profesional yang telah mengotomatiskan catatan rapat mereka bersama ScribeAI.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-bold text-indigo-600 shadow-sm hover:bg-indigo-50">
                Daftar Gratis Sekarang
              </button>
              <button className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xs hover:bg-white/20">
                Jadwalkan Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}