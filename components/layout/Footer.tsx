"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        setMessage('');

        try {
            const res = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setMessage('Successfully joined the community!');
                setEmail('');
            } else {
                setStatus('error');
                setMessage(data.error || 'Something went wrong.');
            }
        } catch (err) {
            setStatus('error');
            setMessage('Network error. Please try again.');
        }
    };

    return (
        <footer className="w-full py-20 border-t border-white/5 mt-20 relative z-10 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                {/* Newsletter/Waitlist Section */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Stay updated with Retainer AI</h3>
                    <p className="text-slate-400 mb-8 max-w-md">
                        Join our community of creators and get the latest insights delivered to your inbox.
                    </p>

                    <form onSubmit={handleSubmit} className="w-full max-w-md relative group">
                        <div className="relative flex flex-col sm:flex-row gap-3">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 !bg-white/5 !border-white/10 focus:!border-pink-500/50 !h-12 !px-5"
                                required
                                disabled={status === 'loading' || status === 'success'}
                            />
                            <Button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className="!h-12 !px-8 flex items-center justify-center gap-2 min-w-[140px]"
                            >
                                {status === 'loading' ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                ) : status === 'success' ? (
                                    <CheckCircle2 className="w-4 h-4" />
                                ) : (
                                    <>
                                        Join Now
                                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </Button>
                        </div>

                        {message && (
                            <div className={`mt-4 flex items-center justify-center gap-2 text-sm animate-in fade-in slide-in-from-top-2 ${status === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}>
                                {status === 'success' ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
                                {message}
                            </div>
                        )}
                    </form>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
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
            </div>
        </footer>
    );
};

export default Footer;
