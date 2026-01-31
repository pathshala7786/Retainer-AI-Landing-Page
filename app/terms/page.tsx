"use client";

import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 pt-40 pb-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
                    Terms of Service
                </h1>

                <div className="space-y-8 text-slate-400 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using Retainer AI, you accept and agree to be bound by the terms and provision
                            of this agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">2. Description of Service</h2>
                        <p>
                            Retainer AI provides AI-powered analysis for social media profiles and caption generation tools.
                            The service is currently in early access/waitlist stage.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">3. Waitlist Registration</h2>
                        <p>
                            Registration for the waitlist does not guarantee access to the service or any specific
                            pricing tier. Access is granted at our sole discretion.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">4. Intellectual Property</h2>
                        <p>
                            The names, logos, and graphics of Retainer AI are the property of the company. You may not
                            use them without prior written permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
                        <p>
                            Retainer AI shall not be liable for any indirect, incidental, special, consequential or
                            punitive damages resulting from your use of the service.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
