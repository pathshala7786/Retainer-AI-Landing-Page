import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-12 border-t border-white/5 mt-20 relative z-10 bg-transparent flex justify-center">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Retainer AI. All rights reserved.
                </div>
                <div className="flex gap-8 text-slate-500 text-sm">
                    <a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-pink-500 transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-pink-500 transition-colors">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
