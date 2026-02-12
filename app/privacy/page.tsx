import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Retainer AI',
    description: 'Understand how Retainer AI protects your data. We collect minimal information to provide the best social media analytics experience.',
    alternates: {
        canonical: 'https://retainer-ai-eta.vercel.app/privacy',
    }
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 pt-40 pb-20">
                <header>
                    <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
                        Privacy Policy
                    </h1>
                </header>

                <div className="space-y-8 text-slate-400 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
                        <p>
                            Welcome to Retainer AI. We respect your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our
                            website and tell you about your privacy rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">2. Data We Collect</h2>
                        <p>
                            When you join our community or use our services, we only collect minimal data required (like your email address). This information is used solely to
                            provide the best social media analytics experience and keep you updated on new features.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Data</h2>
                        <p>
                            We will only use your personal data for the purpose for which we collected it.
                            We do not sell your personal data to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">4. Data Security</h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being
                            accidentally lost, used, or accessed in an unauthorized way.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">5. Your Rights</h2>
                        <p>
                            You have the right to request the deletion of your email address from our records at any time.
                            Please contact us if you wish to exercise this right.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
