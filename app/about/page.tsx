import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Target, TrendingUp, Users } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Retainer AI',
    description: 'Learn about our mission to democratize data science for content creators and how our AI-powered analytics drive social media growth.',
    alternates: {
        canonical: 'https://retainer-ai-waitlist.vercel.app/about',
    }
};

export default function About() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 pt-40 pb-20">
                <header>
                    <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
                        About Retainer AI
                    </h1>
                </header>

                <div className="space-y-12 text-slate-400 leading-relaxed">
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                        <p>
                            Retainer AI was built with a single goal: to democratize data science for content creators.
                            We believe that growing your social presence shouldn't be a guessing game. By leveraging
                            advanced AI and real-time data analysis, we help creators understand exactly what drives
                            their audience engagement.
                        </p>
                    </section>

                    <section className="grid md:grid-cols-3 gap-8">
                        <article className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <Target className="text-pink-500 mb-4" size={32} />
                            <h3 className="text-lg font-semibold text-white mb-2">Precision</h3>
                            <p className="text-sm">Accuracy is our top priority. We parse millions of data points to give you true insights.</p>
                        </article>
                        <article className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <TrendingUp className="text-purple-500 mb-4" size={32} />
                            <h3 className="text-lg font-semibold text-white mb-2">Growth</h3>
                            <p className="text-sm">Our tools are designed specifically to increase your reach and conversion rates.</p>
                        </article>
                        <article className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <Users className="text-indigo-500 mb-4" size={32} />
                            <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
                            <p className="text-sm">Join a community of thousands of creators who are already using data to win.</p>
                        </article>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-white">The Future</h2>
                        <p>
                            We are constantly evolving. Our team is working on deeper integrations, predictive modeling,
                            and automated content strategy tools that will change the way you think about social media growth.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
