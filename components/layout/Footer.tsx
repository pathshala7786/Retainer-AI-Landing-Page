import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full py-12 border-t border-white/5 mt-20 relative z-10 bg-transparent flex justify-center">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Retainer AI. All rights reserved.
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 bg-white/5 py-1.5 px-3 rounded-full border border-white/5 hover:border-pink-500/30 transition-colors">
                    <span>Created By</span>
                    <Link
                        href="https://x.com/Code_Fusion_01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-pink-500 transition-colors group"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://unavatar.io/twitter/Code_Fusion_01"
                            alt="Code Fusion"
                            className="w-5 h-5 rounded-full border border-white/10 group-hover:border-pink-500/50 transition-colors"
                        />
                        <span className="font-medium text-slate-400 group-hover:text-pink-400 transition-colors">Code Fusion</span>
                    </Link>
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
