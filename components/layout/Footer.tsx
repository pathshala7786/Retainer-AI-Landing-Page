import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full py-12 border-t border-white/5 mt-20 relative z-10 bg-transparent flex justify-center">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Retainer AI. All rights reserved.
                </div>
                <div className="flex gap-8 text-slate-500 text-sm">
                    <Link href="/privacy" className="hover:text-pink-500 transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-pink-500 transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
