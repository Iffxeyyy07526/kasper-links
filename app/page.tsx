'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function BioLinksPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2600);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Kasper Capital Markets | Links',
      text: 'Forex & CFD trading on MT5. Transparency and education first.',
      url: typeof window !== 'undefined' ? window.location.href : '',
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        showToast('Link copied to clipboard!');
      }).catch(() => {
        fallbackCopy(url);
      });
    } else {
      fallbackCopy(url);
    }
  };

  const fallbackCopy = (text: string) => {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.select();
    try {
      document.execCommand('copy');
      showToast('Link copied to clipboard!');
    } catch {
      showToast('Failed to copy link');
    }
    document.body.removeChild(el);
  };

  return (
    <div className="relative min-h-screen bg-[#0a0f1a] text-white flex flex-col items-center px-3.5 py-5 sm:py-8 overflow-x-hidden selection:bg-[#2ee86b]/20 selection:text-[#2ee86b]">
      
      {/* Background Decorative Grid, Candlesticks & Vignette */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Radial gradient base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(22,42,70,0.7)_0%,rgba(10,15,26,0.95)_60%,#0a0f1a_100%)]" />
        
        {/* Glowing grid */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(46, 232, 107, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(46, 232, 107, 0.05) 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
            maskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 85%)',
          }}
        />

        {/* Abstract Candlestick Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bull-glow-next" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2ee86b" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#2ee86b" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient id="bear-glow-next" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#64748b" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#64748b" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          {/* Abstract Trend Line */}
          <path d="M 0 540 Q 300 480 600 360 T 1200 210" fill="none" stroke="#2ee86b" strokeWidth="1.4" strokeOpacity="0.35" strokeDasharray="5 5" />

          {/* Left Cluster */}
          <line x1="80" y1="460" x2="80" y2="580" stroke="#64748b" strokeWidth="1.2" />
          <rect x="73" y="490" width="14" height="60" rx="2" fill="url(#bear-glow-next)" />

          <line x1="130" y1="430" x2="130" y2="540" stroke="#2ee86b" strokeWidth="1.2" strokeOpacity="0.65" />
          <rect x="123" y="450" width="14" height="70" rx="2" fill="url(#bull-glow-next)" stroke="#2ee86b" strokeWidth="1" strokeOpacity="0.5" />

          <line x1="180" y1="390" x2="180" y2="510" stroke="#2ee86b" strokeWidth="1.2" strokeOpacity="0.65" />
          <rect x="173" y="410" width="14" height="80" rx="2" fill="url(#bull-glow-next)" stroke="#2ee86b" strokeWidth="1" strokeOpacity="0.5" />

          <line x1="230" y1="370" x2="230" y2="480" stroke="#64748b" strokeWidth="1.2" />
          <rect x="223" y="400" width="14" height="50" rx="2" fill="url(#bear-glow-next)" />

          <line x1="280" y1="330" x2="280" y2="450" stroke="#2ee86b" strokeWidth="1.2" strokeOpacity="0.65" />
          <rect x="273" y="350" width="14" height="75" rx="2" fill="url(#bull-glow-next)" stroke="#2ee86b" strokeWidth="1" strokeOpacity="0.5" />

          {/* Center Cluster */}
          <line x1="520" y1="310" x2="520" y2="440" stroke="#2ee86b" strokeWidth="1.2" strokeOpacity="0.55" />
          <rect x="513" y="330" width="14" height="85" rx="2" fill="url(#bull-glow-next)" stroke="#2ee86b" strokeWidth="1" strokeOpacity="0.4" />

          <line x1="570" y1="280" x2="570" y2="410" stroke="#64748b" strokeWidth="1.2" />
          <rect x="563" y="310" width="14" height="60" rx="2" fill="url(#bear-glow-next)" />

          <line x1="620" y1="250" x2="620" y2="380" stroke="#2ee86b" strokeWidth="1.2" strokeOpacity="0.65" />
          <rect x="613" y="270" width="14" height="90" rx="2" fill="url(#bull-glow-next)" stroke="#2ee86b" strokeWidth="1" strokeOpacity="0.5" />

          {/* Right Cluster */}
          <line x1="920" y1="180" x2="920" y2="310" stroke="#2ee86b" strokeWidth="1.2" strokeOpacity="0.65" />
          <rect x="913" y="200" width="14" height="85" rx="2" fill="url(#bull-glow-next)" stroke="#2ee86b" strokeWidth="1" strokeOpacity="0.5" />

          <line x1="970" y1="160" x2="970" y2="280" stroke="#2ee86b" strokeWidth="1.2" strokeOpacity="0.65" />
          <rect x="963" y="175" width="14" height="75" rx="2" fill="url(#bull-glow-next)" stroke="#2ee86b" strokeWidth="1" strokeOpacity="0.5" />

          <line x1="1020" y1="150" x2="1020" y2="260" stroke="#64748b" strokeWidth="1.2" />
          <rect x="1013" y="170" width="14" height="50" rx="2" fill="url(#bear-glow-next)" />

          <line x1="1070" y1="120" x2="1070" y2="230" stroke="#2ee86b" strokeWidth="1.4" strokeOpacity="0.75" />
          <rect x="1063" y="135" width="14" height="70" rx="2" fill="url(#bull-glow-next)" stroke="#2ee86b" strokeWidth="1" strokeOpacity="0.6" />
        </svg>

        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_50%,rgba(5,8,14,0.75)_100%)]" />
      </div>

      {/* Screen Reader Semantic Heading */}
      <h1 className="sr-only">Kasper Capital Markets</h1>

      {/* Top Utilities (Smaller, subtle share button placed top right) */}
      <div className="relative z-10 w-full max-w-[480px] flex justify-end mb-1.5">
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11.5px] font-medium text-slate-300 bg-slate-900/60 border border-white/10 backdrop-blur-md hover:text-white hover:border-[#2ee86b] hover:bg-slate-800/80 hover:shadow-[0_0_12px_rgba(46,232,107,0.2)] active:scale-95 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2ee86b]"
          aria-label="Share this link page"
        >
          <svg className="w-3 h-3 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          <span>Share</span>
        </button>
      </div>

      {/* Main Single Centered Column */}
      <main className="relative z-10 w-full max-w-[480px] flex flex-col items-center">
        
        {/* Header: Logo ~20% larger, soft green glow, duplicate text heading removed */}
        <header className="flex flex-col items-center text-center mb-3.5 w-full">
          <div className="relative flex items-center justify-center mb-3.5">
            <div 
              className="absolute w-[290px] h-[120px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(46, 232, 107, 0.38) 0%, rgba(46, 232, 107, 0.12) 55%, transparent 75%)',
                filter: 'blur(32px)',
              }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <Image
                src="/logo.png"
                alt="Kasper Capital Markets"
                width={268}
                height={73}
                priority
                className="w-[268px] max-w-[82vw] h-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Brighter, slightly bolder tagline with MT5 highlighted */}
          <p className="text-[14px] text-[#c9d1d9] font-medium max-w-[380px] leading-relaxed mb-3 px-1">
            Forex &amp; CFD trading on <span className="text-[#2ee86b] font-semibold drop-shadow-[0_0_10px_rgba(46,232,107,0.35)]">MT5</span>. Transparency and education first.
          </p>

          {/* Three Pill Chips */}
          <div className="flex items-center justify-center flex-wrap gap-1.5 w-full">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/70 border border-white/10 text-[11.5px] font-medium text-slate-200 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2ee86b] shadow-[0_0_6px_#2ee86b]" />
              MetaTrader 5
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/70 border border-white/10 text-[11.5px] font-medium text-slate-200 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2ee86b] shadow-[0_0_6px_#2ee86b]" />
              Transparent Conditions
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/70 border border-white/10 text-[11.5px] font-medium text-slate-200 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2ee86b] shadow-[0_0_6px_#2ee86b]" />
              Trading Education
            </span>
          </div>
        </header>

        {/* Round Social Icon Buttons Row (Bright emerald green with visible green border and soft glow) */}
        <nav className="flex items-center justify-center gap-3 mt-3.5 mb-4.5 w-full" aria-label="Social Profiles">
          {/* YouTube Official-style */}
          <a
            href="https://youtube.com/@kaspercapitalfx?si=X-Tny9iMyulqK8y6"
            target="_blank"
            rel="noopener noreferrer"
            data-link="social-youtube"
            aria-label="YouTube Channel"
            className="w-12 h-12 rounded-full bg-slate-900/85 border border-[#2ee86b]/60 text-[#2ee86b] flex items-center justify-center shadow-[0_0_12px_rgba(46,232,107,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:border-[#2ee86b] hover:bg-[#16223a] hover:shadow-[0_0_20px_rgba(46,232,107,0.4)] active:scale-95 focus-visible:outline-2 focus-visible:outline-[#2ee86b]"
          >
            <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          {/* Telegram Official-style */}
          <a
            href="https://t.me/kasperfxglobal"
            target="_blank"
            rel="noopener noreferrer"
            data-link="social-telegram"
            aria-label="Telegram Channel"
            className="w-12 h-12 rounded-full bg-slate-900/85 border border-[#2ee86b]/60 text-[#2ee86b] flex items-center justify-center shadow-[0_0_12px_rgba(46,232,107,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:border-[#2ee86b] hover:bg-[#16223a] hover:shadow-[0_0_20px_rgba(46,232,107,0.4)] active:scale-95 focus-visible:outline-2 focus-visible:outline-[#2ee86b]"
          >
            <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.919z"/>
            </svg>
          </a>

          {/* Instagram Official-style */}
          <a
            href="https://www.instagram.com/kaspercapital.fx?mdxt=emhhczdoMmNpNHFn"
            target="_blank"
            rel="noopener noreferrer"
            data-link="social-instagram"
            aria-label="Instagram Profile"
            className="w-12 h-12 rounded-full bg-slate-900/85 border border-[#2ee86b]/60 text-[#2ee86b] flex items-center justify-center shadow-[0_0_12px_rgba(46,232,107,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:border-[#2ee86b] hover:bg-[#16223a] hover:shadow-[0_0_20px_rgba(46,232,107,0.4)] active:scale-95 focus-visible:outline-2 focus-visible:outline-[#2ee86b]"
          >
            <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </nav>

        {/* Links Column */}
        <section className="w-full flex flex-col gap-2.5 mb-7" aria-label="Direct Links">
          
          {/* 1. Primary: Open an Account (Shine sweep animation + glow pulse + neutral account icon) */}
          <a
            href="https://client.kasperfx.com/client/register/6a4da0a71f71a"
            target="_blank"
            rel="noopener noreferrer"
            data-link="open-account"
            className="group relative overflow-hidden flex items-center min-h-[60px] px-4 py-2.5 rounded-[16px] bg-[#2ee86b] text-[#07150d] border border-[#2ee86b] shadow-[0_4px_18px_rgba(46,232,107,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#39ec75] hover:shadow-[0_8px_30px_rgba(46,232,107,0.55)] active:scale-[0.985] active:bg-[#25d45e] focus-visible:outline-2 focus-visible:outline-white"
          >
            {/* Subtle Shine Sweep Beam */}
            <div 
              className="absolute -top-[60%] -left-[130%] w-[65%] h-[220%] bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-[25deg] pointer-events-none animate-[shine-sweep_4.8s_ease-in-out_infinite]"
              aria-hidden="true"
            />

            <div className="w-10 h-10 rounded-xl bg-black/15 flex items-center justify-center shrink-0 mr-3">
              <svg className="w-5 h-5 text-[#07150d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <line x1="20" y1="8" x2="20" y2="14" />
                <line x1="23" y1="11" x2="17" y2="11" />
              </svg>
            </div>
            <div className="flex flex-col flex-grow min-w-0 text-left">
              <span className="font-bold text-[15px] leading-tight text-[#07150d]">Open an Account</span>
              <span className="text-[12.5px] font-medium text-[#07150d]/80 mt-0.5 truncate">Start in minutes</span>
            </div>
            <div className="ml-2 shrink-0 text-[#07150d] transition-transform duration-200 group-hover:translate-x-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </a>

          {/* 2. Secondary: Join our Telegram (Brand Icon + Thin green left border + Glassmorphism) */}
          <a
            href="https://t.me/kasperfxglobal"
            target="_blank"
            rel="noopener noreferrer"
            data-link="telegram-channel"
            className="group flex items-center min-h-[60px] px-4 py-2.5 rounded-[16px] bg-slate-900/75 backdrop-blur-md text-white border border-white/10 border-l-[3.5px] border-l-[#2ee86b] shadow-[0_4px_14px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800/85 hover:border-[#2ee86b]/40 hover:border-l-[#39ec75] hover:shadow-[0_6px_20px_-2px_rgba(46,232,107,0.3)] active:scale-[0.985] active:bg-slate-800/95 focus-visible:outline-2 focus-visible:outline-[#2ee86b]"
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-[#2ee86b]/20 text-[#2ee86b] flex items-center justify-center shrink-0 mr-3">
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15.7-.95 4.54-1.34 6.64-.17.89-.5 1.19-.81 1.22-.69.06-1.21-.45-1.88-.89-1.04-.68-1.63-1.11-2.64-1.78-1.17-.77-.41-1.2.26-1.89.17-.18 3.19-2.92 3.25-3.18.01-.03.01-.15-.06-.21-.07-.06-.17-.04-.25-.02-.11.02-1.88 1.19-5.3 3.5-.5.34-.96.51-1.37.5-.46-.01-1.33-.26-1.98-.47-.8-.26-1.43-.4-1.38-.85.03-.23.35-.47.96-.72 3.76-1.64 6.27-2.72 7.53-3.24 3.58-1.49 4.33-1.75 4.81-1.76.11 0 .34.03.49.16.13.11.16.26.18.37-.01.07.01.22 0 .28z"/>
              </svg>
            </div>
            <div className="flex flex-col flex-grow min-w-0 text-left">
              <span className="font-semibold text-[15px] leading-tight text-white">Join our Telegram</span>
              <span className="text-[12.5px] text-[#c9d1d9] mt-0.5 truncate">Daily market notes and updates</span>
            </div>
            <div className="ml-2 shrink-0 text-slate-500 transition-all duration-200 group-hover:text-[#2ee86b] group-hover:translate-x-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </a>

          {/* 3. Secondary: Watch on YouTube (Brand Icon + Thin green left border) */}
          <a
            href="https://youtube.com/@kaspercapitalfx?si=X-Tny9iMyulqK8y6"
            target="_blank"
            rel="noopener noreferrer"
            data-link="youtube-channel"
            className="group flex items-center min-h-[60px] px-4 py-2.5 rounded-[16px] bg-slate-900/75 backdrop-blur-md text-white border border-white/10 border-l-[3.5px] border-l-[#2ee86b] shadow-[0_4px_14px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800/85 hover:border-[#2ee86b]/40 hover:border-l-[#39ec75] hover:shadow-[0_6px_20px_-2px_rgba(46,232,107,0.3)] active:scale-[0.985] active:bg-slate-800/95 focus-visible:outline-2 focus-visible:outline-[#2ee86b]"
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-[#2ee86b]/20 text-[#2ee86b] flex items-center justify-center shrink-0 mr-3">
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <div className="flex flex-col flex-grow min-w-0 text-left">
              <span className="font-semibold text-[15px] leading-tight text-white">Watch on YouTube</span>
              <span className="text-[12.5px] text-[#c9d1d9] mt-0.5 truncate">Trading education and tutorials</span>
            </div>
            <div className="ml-2 shrink-0 text-slate-500 transition-all duration-200 group-hover:text-[#2ee86b] group-hover:translate-x-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </a>

          {/* 4. Secondary: Follow on Instagram (Brand Icon + Thin green left border) */}
          <a
            href="https://www.instagram.com/kaspercapital.fx?mdxt=emhhczdoMmNpNHFn"
            target="_blank"
            rel="noopener noreferrer"
            data-link="instagram-profile"
            className="group flex items-center min-h-[60px] px-4 py-2.5 rounded-[16px] bg-slate-900/75 backdrop-blur-md text-white border border-white/10 border-l-[3.5px] border-l-[#2ee86b] shadow-[0_4px_14px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800/85 hover:border-[#2ee86b]/40 hover:border-l-[#39ec75] hover:shadow-[0_6px_20px_-2px_rgba(46,232,107,0.3)] active:scale-[0.985] active:bg-slate-800/95 focus-visible:outline-2 focus-visible:outline-[#2ee86b]"
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-[#2ee86b]/20 text-[#2ee86b] flex items-center justify-center shrink-0 mr-3">
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <div className="flex flex-col flex-grow min-w-0 text-left">
              <span className="font-semibold text-[15px] leading-tight text-white">Follow on Instagram</span>
              <span className="text-[12.5px] text-[#c9d1d9] mt-0.5 truncate">@kaspercapital.fx</span>
            </div>
            <div className="ml-2 shrink-0 text-slate-500 transition-all duration-200 group-hover:text-[#2ee86b] group-hover:translate-x-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </a>

          {/* 5. Secondary: Visit Our Website (Neutral Globe Icon) */}
          <a
            href="https://kasperfx.com"
            target="_blank"
            rel="noopener noreferrer"
            data-link="official-website"
            className="group flex items-center min-h-[60px] px-4 py-2.5 rounded-[16px] bg-slate-900/75 backdrop-blur-md text-white border border-white/10 border-l-[3.5px] border-l-[#2ee86b] shadow-[0_4px_14px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800/85 hover:border-[#2ee86b]/40 hover:border-l-[#39ec75] hover:shadow-[0_6px_20px_-2px_rgba(46,232,107,0.3)] active:scale-[0.985] active:bg-slate-800/95 focus-visible:outline-2 focus-visible:outline-[#2ee86b]"
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-[#2ee86b]/20 text-[#2ee86b] flex items-center justify-center shrink-0 mr-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="flex flex-col flex-grow min-w-0 text-left">
              <span className="font-semibold text-[15px] leading-tight text-white">Visit Our Website</span>
              <span className="text-[12.5px] text-[#c9d1d9] mt-0.5 truncate">kasperfx.com</span>
            </div>
            <div className="ml-2 shrink-0 text-slate-500 transition-all duration-200 group-hover:text-[#2ee86b] group-hover:translate-x-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </a>

          {/* 6. Secondary: Chat on WhatsApp (Recognizable WhatsApp Brand Icon) */}
          <a
            href="https://wa.me/447344994847"
            target="_blank"
            rel="noopener noreferrer"
            data-link="whatsapp-chat"
            className="group flex items-center min-h-[60px] px-4 py-2.5 rounded-[16px] bg-slate-900/75 backdrop-blur-md text-white border border-white/10 border-l-[3.5px] border-l-[#2ee86b] shadow-[0_4px_14px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800/85 hover:border-[#2ee86b]/40 hover:border-l-[#39ec75] hover:shadow-[0_6px_20px_-2px_rgba(46,232,107,0.3)] active:scale-[0.985] active:bg-slate-800/95 focus-visible:outline-2 focus-visible:outline-[#2ee86b]"
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-[#2ee86b]/20 text-[#2ee86b] flex items-center justify-center shrink-0 mr-3">
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.61L5.07 16.29C4.24 14.98 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.57 14.33C16.32 14.2 15.11 13.61 14.88 13.53C14.66 13.44 14.5 13.4 14.33 13.65C14.17 13.9 13.71 14.44 13.56 14.61C13.42 14.77 13.28 14.8 13.03 14.67C12.78 14.55 11.99 14.29 11.05 13.45C10.31 12.79 9.81 11.98 9.67 11.73C9.53 11.48 9.65 11.35 9.78 11.23C9.89 11.11 10.03 10.93 10.15 10.78C10.28 10.64 10.32 10.54 10.4 10.37C10.48 10.21 10.44 10.07 10.38 9.95C10.32 9.82 9.83 8.62 9.62 8.12C9.42 7.63 9.22 7.7 9.07 7.69C8.93 7.68 8.76 7.68 8.6 7.68C8.43 7.68 8.16 7.74 7.93 7.99C7.71 8.24 7.07 8.84 7.07 10.05C7.07 11.27 7.96 12.44 8.08 12.6C8.21 12.77 9.83 15.26 12.31 16.33C12.9 16.59 13.36 16.74 13.72 16.85C14.31 17.04 14.85 17.01 15.28 16.95C15.76 16.88 16.75 16.35 16.96 15.77C17.17 15.19 17.17 14.69 17.11 14.6C17.04 14.49 16.82 14.45 16.57 14.33Z"/>
              </svg>
            </div>
            <div className="flex flex-col flex-grow min-w-0 text-left">
              <span className="font-semibold text-[15px] leading-tight text-white">Chat on WhatsApp</span>
              <span className="text-[12.5px] text-[#c9d1d9] mt-0.5 truncate">Talk to our team</span>
            </div>
            <div className="ml-2 shrink-0 text-slate-500 transition-all duration-200 group-hover:text-[#2ee86b] group-hover:translate-x-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </a>

          {/* 7. Secondary: Email Support (Neutral Envelope Icon) */}
          <a
            href="mailto:Support@kasperfx.com"
            data-link="email-support"
            className="group flex items-center min-h-[60px] px-4 py-2.5 rounded-[16px] bg-slate-900/75 backdrop-blur-md text-white border border-white/10 border-l-[3.5px] border-l-[#2ee86b] shadow-[0_4px_14px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800/85 hover:border-[#2ee86b]/40 hover:border-l-[#39ec75] hover:shadow-[0_6px_20px_-2px_rgba(46,232,107,0.3)] active:scale-[0.985] active:bg-slate-800/95 focus-visible:outline-2 focus-visible:outline-[#2ee86b]"
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-[#2ee86b]/20 text-[#2ee86b] flex items-center justify-center shrink-0 mr-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="flex flex-col flex-grow min-w-0 text-left">
              <span className="font-semibold text-[15px] leading-tight text-white">Email Support</span>
              <span className="text-[12.5px] text-[#c9d1d9] mt-0.5 truncate">Support@kasperfx.com</span>
            </div>
            <div className="ml-2 shrink-0 text-slate-500 transition-all duration-200 group-hover:text-[#2ee86b] group-hover:translate-x-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </a>

        </section>

        {/* Footer */}
        <footer className="w-full text-center border-t border-white/10 pt-4 pb-2">
          {/* Footer Text Links */}
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            {/* Replace href="#" with your real Terms URL e.g. https://kasperfx.com/terms */}
            <a href="#" className="text-xs font-medium text-slate-400 hover:text-[#2ee86b] hover:underline transition-colors">Terms</a>
            <span className="text-slate-600 text-[10px]">&bull;</span>
            {/* Replace href="#" with your real Privacy URL e.g. https://kasperfx.com/privacy */}
            <a href="#" className="text-xs font-medium text-slate-400 hover:text-[#2ee86b] hover:underline transition-colors">Privacy</a>
            <span className="text-slate-600 text-[10px]">&bull;</span>
            {/* Replace href="#" with your real Risk Disclosure URL e.g. https://kasperfx.com/risk-disclosure */}
            <a href="#" className="text-xs font-medium text-slate-400 hover:text-[#2ee86b] hover:underline transition-colors">Risk Disclosure</a>
          </div>

          <p className="text-[11.5px] text-slate-500 leading-relaxed mb-2.5 px-1">
            Trading forex and CFDs involves a high risk of loss and may not be suitable for everyone. Capital at risk. Not available to residents of the UAE, USA, Cuba, Iraq, Myanmar, North Korea, and Sudan.
          </p>
          <p className="text-xs text-slate-600 font-medium tracking-wide">
            &copy; 2026 Kasper Capital Markets Ltd.
          </p>
        </footer>

      </main>

      {/* Toast Notification */}
      <div 
        role="status" 
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4.5 py-2 rounded-full bg-[#111e33] border border-[#2ee86b] text-white text-[13px] font-medium shadow-[0_8px_24px_rgba(0,0,0,0.6),0_0_16px_rgba(46,232,107,0.25)] transition-all duration-300 z-50 pointer-events-none ${
          toastMessage ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-10 opacity-0'
        }`}
      >
        <svg className="w-4 h-4 text-[#2ee86b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span>{toastMessage}</span>
      </div>

    </div>
  );
}
