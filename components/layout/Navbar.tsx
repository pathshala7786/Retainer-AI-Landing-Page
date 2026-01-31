"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react';

const Navbar = () => {
    const [showPricingPopup, setShowPricingPopup] = useState(false);

    return (
        <>
            <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                <div className="bg-white/5 backdrop-blur-xl rounded-full px-6 py-3 border border-white/10 shadow-2xl flex items-center gap-8 md:gap-12">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-8 h-8 group-hover:scale-110 transition-transform duration-300">
                            <Image
                                src="/assets/logo-main.png"
                                alt="Retainer AI Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="text-lg font-bold text-white tracking-tight hidden sm:block">Retainer AI</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8 text-white/70 font-medium text-sm">
                        <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
                        <button
                            onClick={() => setShowPricingPopup(true)}
                            className="hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                        >
                            Pricing
                        </button>
                        <Link href="/about" className="hover:text-white transition-colors">About</Link>
                    </div>

                    <Link
                        href="/#waitlist"
                        className="btn-secondary !py-2 !px-5 !text-xs !bg-white/5 !border-white/10 hover:!bg-white/20 whitespace-nowrap inline-flex items-center justify-center rounded-full transition-all"
                        onClick={(e) => {
                            if (window.location.pathname === '/') {
                                e.preventDefault();
                                document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Join Waitlist
                    </Link>
                </div>
            </nav>

            {/* Pricing Popup Modal */}
            {showPricingPopup && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
                        onClick={() => setShowPricingPopup(false)}
                    />

                    {/* Modal Content */}
                    <div className="relative bg-[#0A0A0A] border border-white/10 p-8 rounded-2xl max-w-sm w-full shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col items-center text-center">
                        <button
                            onClick={() => setShowPricingPopup(false)}
                            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center mb-4 text-pink-500">
                            <span className="text-2xl">🚀</span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2">Worth the wait.</h3>
                        <p className="text-slate-400 mb-6">
                            Pricing Soon. It&apos;s in beta testing.
                        </p>

                        <button
                            onClick={() => setShowPricingPopup(false)}
                            className="w-full py-2.5 bg-white text-black font-medium rounded-xl hover:bg-slate-200 transition-colors"
                        >
                            Got it
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
