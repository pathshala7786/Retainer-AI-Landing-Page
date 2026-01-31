import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';

const Navbar = () => {
    return (
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
                    <Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link>
                    <Link href="/about" className="hover:text-white transition-colors">About</Link>
                </div>

                <Link href="/#waitlist">
                    <Button variant="secondary" className="!py-2 !px-5 !text-xs !bg-white/5 !border-white/10 hover:!bg-white/20 whitespace-nowrap">
                        Join Waitlist
                    </Button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
