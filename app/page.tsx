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
import { ArrowRight, BarChart2, MessageSquare, TrendingUp, Sparkles, CheckCircle2, Zap, Target, Users, Wand2, ShieldCheck } from 'lucide-react';

export default function Home() {
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

  // 3. Magnetic Button Effect
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
    <main className="min-h-screen bg-black flex flex-col font-sans selection:bg-pink-500/30 overflow-x-hidden relative">
      {/* Global Fixed Grid Background - Covers entire page including footer */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,#000_60%,transparent_100%)] md:[mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section id="waitlist" className="relative w-full flex flex-col items-center justify-center min-h-screen z-10 pt-40 pb-20">
          {/* Ambient Glows with Anime.js */}
          <div
            ref={glow1Ref}
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[128px] pointer-events-none"
          />
          <div
            ref={glow2Ref}
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[128px] pointer-events-none"
          />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 mb-8 shadow-[0_0_20px_rgba(236,72,153,0.1)] hover:border-pink-500/30 transition-all duration-500 cursor-default">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-glow-pulse"></span>
              <span className="text-xl font-teko font-normal text-pink-200/90 uppercase tracking-[0.1em]">Early Access Live</span>
            </div>

            <h1
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

            <form
              ref={formRef}
              className="flex flex-col sm:flex-row gap-4 w-full max-w-lg items-center relative z-20"
              onSubmit={handleSubmit}
              style={{ opacity: 0 }}
            >
              <div className="relative flex-1 w-full">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading' || status === 'success'}
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
              <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-400' : 'text-rose-400'} animate-float`}>
                {message}
              </p>
            )}

            <div className="mt-6 text-sm text-slate-500 flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-black" />
                ))}
              </div>
              <span>Join {count !== null ? (2000 + count).toLocaleString() : '2,000'}+ creators waiting</span>
            </div>

            {/* Video Preview / Phone Mockup */}
            <div className="mt-20 relative w-full max-w-md mx-auto">
              <PhoneMockup borderColor="#a855f7">
                <Image
                  src="/assets/screenshots/Screenshot_20260131_134015.jpg"
                  alt="App Dashboard"
                  fill
                  sizes="(max-width: 768px) 100vw, 462px"
                  className="object-cover object-top"
                />
              </PhoneMockup>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 space-y-40">

            {/* Feature 1: Analysis */}
            <div className="grid md:grid-cols-2 gap-20 items-center relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-500/50 to-transparent -translate-x-1/2" />

              <div className="order-2 md:order-1 relative z-10">
                <PhoneMockup borderColor="#ec4899">
                  <Image
                    src="/assets/screenshots/Screenshot_20260131_134015.jpg"
                    alt="AI Analytics Dashboard"
                    fill
                    sizes="(max-width: 768px) 100vw, 462px"
                    className="object-cover object-top scale-105 hover:scale-100 transition-transform duration-700"
                  />
                </PhoneMockup>
              </div>
              <div className="order-1 md:order-2 space-y-8 relative z-10 pl-8">
                <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20">
                  <Target size={32} className="text-pink-500" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Deep Profile Analysis</h2>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    Understand exactly what's working. Our AI dissects your engagement patterns, audience demographics, and content performance.
                  </p>
                </div>
                <ul className="space-y-4">
                  {[
                    'Engagement Rate Optimization',
                    'Audience Quality Score',
                    'Content Velocity Tracking'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-slate-300 group">
                      <div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center border border-pink-500/20 group-hover:bg-pink-500/20 transition-colors">
                        <CheckCircle2 size={16} className="text-pink-400" />
                      </div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 2: Captions */}
            <div className="grid md:grid-cols-2 gap-20 items-center relative">
              <div className="space-y-8 relative z-10 pr-8">
                <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
                  <Wand2 size={32} className="text-purple-500" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Data-Driven Captions</h2>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    Generate captions that are mathematically proven to increase reach and saves, designed specifically for your brand voice.
                  </p>
                </div>

                <Button variant="secondary" className="gap-3 group">
                  Generate Magic Captions <Sparkles size={18} className="text-purple-400 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>

              <div className="relative z-10">
                <PhoneMockup borderColor="#a855f7">
                  <Image
                    src="/assets/screenshots/Screenshot_20260131_134036.jpg"
                    alt="Caption Generator"
                    fill
                    sizes="(max-width: 768px) 100vw, 462px"
                    className="object-cover object-top scale-105 hover:scale-100 transition-transform duration-700"
                  />
                </PhoneMockup>
              </div>
            </div>

          </div>
        </section>

        {/* Data/Showcase Grid */}
        <section id="pricing" className="py-32 relative text-center">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-gradient">Real Data. Real Results.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-20 max-w-2xl mx-auto">
              See how Retainer AI transforms raw data into growth strategies.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
              <div className="flex-1 text-left space-y-8 max-w-xl">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-pink-300">
                    <Sparkles size={12} />
                    <span>Feature Stack</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Go Viral</span>
                  </h3>
                  <p className="text-lg text-slate-400">
                    Tap through our powerful suite of growth tools designed to maximize your reach.
                  </p>
                </div>
              </div>

              <div className="w-full max-w-md">
                <FeatureStack features={[
                  {
                    id: 1,
                    title: "Deep Analytics",
                    description: "Visualize your growth with precision. Track follower velocity, engagement heatmaps, and content performance scores in real-time.",
                    icon: TrendingUp,
                    imageSrc: "/assets/screenshots/Screenshot_20260131_133040.jpg"
                  },
                  {
                    id: 2,
                    title: "Smart Captions",
                    description: "Generate hooks that stop the scroll. Our AI analyzes millions of viral posts to craft captions tailored to your niche.",
                    icon: MessageSquare,
                    imageSrc: "/assets/screenshots/Screenshot_20260131_133105.jpg"
                  },
                  {
                    id: 3,
                    title: "Competitor Spy",
                    description: "See what's working for others. Monitor competitor strategies and uncover gaps in the market you can exploit.",
                    icon: BarChart2,
                    imageSrc: "/assets/screenshots/Screenshot_20260131_132030.jpg"
                  }
                ]} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="about" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-900/20" />

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="glass-panel rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
              {/* Animated Background */}
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.4),transparent_70%)] opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

              <div className="relative z-10 space-y-8">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/30 mb-8">
                  <Sparkles className="text-white w-8 h-8 animate-pulse" />
                </div>

                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                  Ready to dominate <br /> your niche?
                </h2>
                <p className="text-xl text-slate-300 max-w-xl mx-auto">
                  Join the exclusive waitlist and be the first to access the future of Social Media growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                  <Input placeholder="Enter your email" className="max-w-xs bg-white/10 border-white/20 !text-white !placeholder-white/40" required />
                  <Button variant="primary" className="w-full sm:w-auto shadow-2xl shadow-pink-600/40">
                    Get Early Access
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
