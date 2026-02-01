"use client";

import React, { useEffect, useRef, useState } from 'react';
import { animate, createTimeline, stagger } from 'animejs';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import PhoneMockup from '../components/ui/PhoneMockup';
import FeatureStack from '../components/ui/FeatureStack';
import Image from 'next/image';
import { ArrowRight, BarChart2, MessageSquare, TrendingUp, Sparkles, CheckCircle2, Zap, Target, Users, Wand2, ShieldCheck, Library } from 'lucide-react';

export default function HomeClient() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const glow1Ref = useRef<HTMLDivElement>(null);
    const glow2Ref = useRef<HTMLDivElement>(null);

    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        // Fetch initial count
        fetch('/api/waitlist')
            .then(res => res.json())
            .then(data => {
                if (data.count !== undefined) setCount(data.count);
            })
            .catch(err => console.error('Error fetching count:', err));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
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
                setMessage('You\'re on the list! Check your inbox soon.');
                setEmail('');
                // Refresh count
                const countRes = await fetch('/api/waitlist');
                const countData = await countRes.json();
                if (countData.count !== undefined) setCount(countData.count);
            } else {
                setStatus('error');
                setMessage(data.error || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setStatus('error');
            setMessage('Network error. Please try again.');
        }
    };

    useEffect(() => {
        // 1. Hero Staggered Entrance Animation
        const timeline = createTimeline({});

        // Animate title words with stagger
        if (titleRef.current) {
            const titleText = titleRef.current.textContent || '';
            titleRef.current.innerHTML = titleText
                .split(' ')
                .map(word => {
                    const cleanWord = word.replace(/[.,]/g, '');
                    let classes = "inline-block";
                    if (cleanWord === 'Growth') {
                        classes += " text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500";
                    }
                    return `<span class="${classes}" style="opacity: 0;">${word} </span>`;
                })
                .join('');

            timeline.add(titleRef.current.querySelectorAll('span'), {
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 1200,
                delay: stagger(100),
            });
        }

        // Animate description
        timeline.add(descRef.current!, {
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800,
        }, '-=800');

        // Animate form
        timeline.add(formRef.current!, {
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800,
        }, '-=600');

        // 2. Organic Floating Glows
        if (glow1Ref.current) {
            animate(glow1Ref.current, {
                translateX: [
                    { value: 50, duration: 3000 },
                    { value: -30, duration: 4000 },
                    { value: 0, duration: 3000 }
                ],
                translateY: [
                    { value: -40, duration: 3500 },
                    { value: 30, duration: 3500 },
                    { value: 0, duration: 3000 }
                ],
                scale: [
                    { value: 1.1, duration: 4000 },
                    { value: 0.9, duration: 4000 },
                    { value: 1, duration: 2000 }
                ],
                opacity: [
                    { value: 0.3, duration: 3000 },
                    { value: 0.5, duration: 3000 },
                    { value: 0.4, duration: 4000 }
                ],
                loop: true,
                easing: 'easeInOutQuad'
            });
        }

        if (glow2Ref.current) {
            animate(glow2Ref.current, {
                translateX: [
                    { value: -60, duration: 4000 },
                    { value: 40, duration: 3500 },
                    { value: 0, duration: 2500 }
                ],
                translateY: [
                    { value: 50, duration: 3000 },
                    { value: -35, duration: 4000 },
                    { value: 0, duration: 3000 }
                ],
                scale: [
                    { value: 0.9, duration: 3500 },
                    { value: 1.15, duration: 3500 },
                    { value: 1, duration: 3000 }
                ],
                opacity: [
                    { value: 0.4, duration: 4000 },
                    { value: 0.6, duration: 3000 },
                    { value: 0.5, duration: 3000 }
                ],
                loop: true,
                easing: 'easeInOutQuad',
                delay: 1000
            });
        }
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return;

        const btn = buttonRef.current;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        animate(btn, {
            translateX: x * 0.3,
            translateY: y * 0.3,
            duration: 400,
            easing: 'easeOutElastic(1, .6)'
        });
    };

    const handleMouseLeave = () => {
        if (!buttonRef.current) return;

        animate(buttonRef.current, {
            translateX: 0,
            translateY: 0,
            duration: 600,
            easing: 'easeOutElastic(1, .4)'
        });
    };

    return (
        <main id="main-content" className="min-h-screen bg-black flex flex-col font-sans selection:bg-pink-500/30 overflow-x-hidden relative">
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0" aria-hidden="true" />
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,#000_60%,transparent_100%)] md:[mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" aria-hidden="true" />

            <div className="relative z-10">
                <Navbar />

                {/* Hero Section */}
                <section className="relative w-full flex flex-col items-center justify-center min-h-screen z-10 pt-40 pb-20" aria-labelledby="hero-heading">
                    <div
                        ref={glow1Ref}
                        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[128px] pointer-events-none"
                        aria-hidden="true"
                    />
                    <div
                        ref={glow2Ref}
                        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[128px] pointer-events-none"
                        aria-hidden="true"
                    />

                    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 mb-8 shadow-[0_0_20px_rgba(236,72,153,0.1)] hover:border-pink-500/30 transition-all duration-500 cursor-default">
                            <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-glow-pulse" aria-hidden="true"></span>
                            <span className="text-xl font-teko font-normal text-pink-200/90 uppercase tracking-[0.1em]">Early Access Live</span>
                        </div>

                        <h1
                            id="hero-heading"
                            ref={titleRef}
                            className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight leading-[1.2] drop-shadow-2xl"
                        >
                            Viral Growth Unlocked.
                        </h1>

                        <p
                            ref={descRef}
                            className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
                            style={{ opacity: 0 }}
                        >
                            Stop guessing. Let AI analyze your profile and generate high-converting captions based on real data.
                        </p>

                        <div id="waitlist" className="scroll-mt-32" />

                        <form
                            id="waitlist-form"
                            ref={formRef}
                            className="flex flex-col sm:flex-row gap-4 w-full max-w-lg items-center relative z-20"
                            onSubmit={handleSubmit}
                            style={{ opacity: 0 }}
                            aria-label="Waitlist signup form"
                        >
                            <div className="relative flex-1 w-full">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={status === 'loading' || status === 'success'}
                                    aria-label="Email address"
                                />
                            </div>
                            <button
                                ref={buttonRef}
                                type="submit"
                                className="btn-primary whitespace-nowrap w-full sm:w-auto disabled:opacity-50"
                                disabled={status === 'loading' || status === 'success'}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            >
                                {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Join Waitlist'}
                            </button>
                        </form>

                        {(status === 'success' || status === 'error') && (
                            <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-400' : 'text-rose-400'} animate-float`} aria-live="polite">
                                {message}
                            </p>
                        )}

                        <div className="mt-8 text-sm text-slate-400 flex flex-col items-center gap-3 group">
                            <div className="flex -space-x-3 items-center">
                                {[1, 2, 3, 4, 5, 6, 7].map(i => (
                                    <div key={i} className="relative w-8 h-8 rounded-full border-2 border-black overflow-hidden ring-2 ring-pink-500/10 group-hover:ring-pink-500/30 transition-all duration-500">
                                        <Image
                                            src={`/assets/users/avatar${i}.png`}
                                            alt={`Happy content creator ${i}`}
                                            fill
                                            sizes="32px"
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <span className="font-medium tracking-wide">{count !== null ? (2006 + count).toLocaleString() : '2,006'}+ Creators Already In</span>
                        </div>

                        {/* Hero Mockup */}
                        <div className="mt-20 relative w-full max-w-md mx-auto">
                            <PhoneMockup borderColor="#a855f7" showCamera={true}>
                                <Image
                                    src="/assets/reports/Main Dashboard.jpg"
                                    alt="Retainer AI Analytics Dashboard - Comprehensive Social Growth View"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 462px"
                                    priority
                                    className="object-cover object-top"
                                />
                            </PhoneMockup>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-32 relative z-10 overflow-hidden" aria-labelledby="features-heading">
                    <header className="max-w-7xl mx-auto px-6 mb-20 text-center">
                        <h2 id="features-heading" className="text-4xl md:text-6xl font-bold text-white mb-6">Built for Social Dominance</h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">Discover the toolset used by leading influencers to drive consistent viral results.</p>
                    </header>

                    <div className="max-w-7xl mx-auto px-6 space-y-40">
                        {/* Feature 1: Analysis */}
                        <article className="grid md:grid-cols-2 gap-20 items-center relative">
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-500/50 to-transparent -translate-x-1/2" />

                            <div className="order-2 md:order-1 relative z-10">
                                <PhoneMockup borderColor="#ec4899" showCamera={false}>
                                    <Image
                                        src="/assets/reports/Social Sync Dashboard.jpg"
                                        alt="Social Media Data Comparison and Profile Health Metrics"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 462px"
                                        className="object-cover object-top scale-105 hover:scale-100 transition-transform duration-700"
                                    />
                                </PhoneMockup>
                            </div>
                            <div className="order-1 md:order-2 space-y-8 relative z-10 pl-8">
                                <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20">
                                    <Target size={32} className="text-pink-500" aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Deep Profile Analysis</h3>
                                    <p className="text-lg text-slate-400 leading-relaxed">
                                        Understand exactly what&apos;s working. Our AI dissects your engagement patterns, audience demographics, and content performance.
                                    </p>
                                </div>
                                <ul className="space-y-4" aria-label="Analysis features list">
                                    {[
                                        'Engagement Rate Optimization',
                                        'Audience Quality Score',
                                        'Content Velocity Tracking'
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-4 text-slate-300 group">
                                            <div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center border border-pink-500/20 group-hover:bg-pink-500/20 transition-colors">
                                                <CheckCircle2 size={16} className="text-pink-400" aria-hidden="true" />
                                            </div>
                                            <span className="text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>

                        {/* Feature 2: Strategic Library */}
                        <article className="grid md:grid-cols-2 gap-20 items-center relative">
                            <div className="space-y-8 relative z-10 pr-8">
                                <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20">
                                    <Library size={32} className="text-indigo-500" aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Strategic Asset Library</h3>
                                    <p className="text-lg text-slate-400 leading-relaxed">
                                        Access your personalized vault of high-performance frameworks. Store, organize, and deploy battle-tested content blocks that resonate with your specific audience.
                                    </p>
                                </div>

                                <Button variant="secondary" className="gap-3 group" aria-label="Explore Strategy Hub">
                                    Explore Strategy Hub <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                </Button>
                            </div>

                            <div className="relative z-10">
                                <PhoneMockup borderColor="#6366f1" showCamera={false}>
                                    <Image
                                        src="/assets/reports/Strategic Library.jpg"
                                        alt="Viral Content Strategy Vault and Asset Organizer"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 462px"
                                        className="object-cover object-top scale-105 hover:scale-100 transition-transform duration-700"
                                    />
                                </PhoneMockup>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Analytics Grid Section */}
                <section id="analytics" className="py-32 relative text-center" aria-labelledby="analytics-heading">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <h2 id="analytics-heading" className="text-4xl md:text-6xl font-bold text-white mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Real Data. Real Results.</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-20 max-w-2xl mx-auto">
                            See how Retainer AI transforms raw data into growth strategies.
                        </p>

                        <div className="w-full">
                            <FeatureStack features={[
                                {
                                    id: 1,
                                    title: "Audit Intelligence",
                                    description: "Get real-time scoring for Viral Potential, Hook Strength, and Aesthetic Quality. Our AI dissects your content to ensure it meets the 2026 algorithm standards.",
                                    icon: ShieldCheck,
                                    imageSrc: "/assets/reports/A1.jpg"
                                },
                                {
                                    id: 2,
                                    title: "Strategy Framework",
                                    description: "Receive tailored platform intel and creator tips. Understand why specific 'Aesthetic POV' frameworks out-perform traditional educational content.",
                                    icon: Target,
                                    imageSrc: "/assets/reports/A2.jpg"
                                },
                                {
                                    id: 3,
                                    title: "Acoustic Engine",
                                    description: "Analyze audio energy and vocal clarity. Sync your voiceover transitions perfectly to visual cues for maximum emotional impact.",
                                    icon: Zap,
                                    imageSrc: "/assets/reports/A3.jpg"
                                },
                                {
                                    id: 4,
                                    title: "Cinematography Analysis",
                                    description: "Optimize shot selection and color science. Transition from close-ups to wide angles to create a sense of expanding spiritual and physical space.",
                                    icon: Sparkles,
                                    imageSrc: "/assets/reports/A4.jpg"
                                },
                                {
                                    id: 5,
                                    title: "Smart Captions",
                                    description: "Generate viral hooks that stop the scroll. Choose from Viral, Educational, or Minimalist styles tailored for the current season.",
                                    icon: MessageSquare,
                                    imageSrc: "/assets/reports/A5.jpg"
                                },
                                {
                                    id: 6,
                                    title: "Hashtag Laboratory",
                                    description: "Access niche-optimized tags and identify your daily 'Viral Slot'. Post at the exact minute your audience is most likely to engage.",
                                    icon: TrendingUp,
                                    imageSrc: "/assets/reports/A6.jpg"
                                },
                                {
                                    id: 7,
                                    title: "Meta Strategy",
                                    description: "Double down on 'Save-Worthy' aesthetics. Plan countdown reels and series that get progressively more detailed as your event approaches.",
                                    icon: BarChart2,
                                    imageSrc: "/assets/reports/A7.jpg"
                                }
                            ]} />
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section id="cta" className="py-32 relative overflow-hidden" aria-labelledby="cta-heading">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-900/20" aria-hidden="true" />

                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <div className="glass-panel rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group border border-white/10">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.4),transparent_70%)] opacity-50 group-hover:opacity-80 transition-opacity duration-700" aria-hidden="true" />

                            <div className="relative z-10 space-y-8">
                                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/30 mb-8">
                                    <Sparkles className="text-white w-8 h-8 animate-pulse" aria-hidden="true" />
                                </div>

                                <h2 id="cta-heading" className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                                    Ready to dominate <br /> your niche?
                                </h2>
                                <p className="text-xl text-slate-300 max-w-xl mx-auto">
                                    Join the exclusive waitlist and be the first to access the future of Social Media growth tools.
                                </p>

                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                                    aria-label="Footer CTA waitlist form"
                                >
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="max-w-xs bg-white/10 border-white/20 !text-white !placeholder-white/40"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={status === 'loading' || status === 'success'}
                                        aria-label="Email address for early access"
                                    />
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        className="w-full sm:w-auto shadow-2xl shadow-pink-600/40"
                                        disabled={status === 'loading' || status === 'success'}
                                    >
                                        {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Get Early Access'}
                                    </Button>
                                </form>

                                {(status === 'success' || status === 'error') && (
                                    <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-400' : 'text-rose-400'} animate-float`} aria-live="polite">
                                        {message}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </main>
    );
}
