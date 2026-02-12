"use client";

import React, { useState } from 'react';
import { Check, X, Sparkles, Zap, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
    const plans = [
        {
            name: "Free",
            price: "$0",
            period: "",
            description: "Perfect for getting started",
            features: [
                { name: "3 AI analyses / month", included: true },
                { name: "Reel + Static analysis", included: true },
                { name: "Last 5 saved audits", included: true },
                { name: "Basic insights", included: true },
                { name: "Carousel analysis", included: false },
                { name: "Priority model", included: false },
            ],
            icon: Sparkles,
            color: "text-slate-200",
            buttonText: "Current Plan",
            highlight: false,
            borderColor: "border-white/10",
            glowColor: "from-emerald-500/20 to-emerald-900/20",
            buttonClass: "!bg-emerald-900/20 !text-emerald-400 !border-emerald-500/30 hover:!bg-emerald-900/30 cursor-default",
            iconBg: "bg-emerald-500/10 text-emerald-400"
        },
        {
            name: "Creator",
            price: "$5",
            period: "/month",
            description: "For serious content creators",
            features: [
                { name: "30 AI analyses / month", included: true },
                { name: "Reel + Static + Carousel", included: true },
                { name: "Last 30 saved audits", included: true },
                { name: "Full insights suite", included: true },
                { name: "Instagram Connect*", included: true, badge: "COMING SOON" },
                { name: "Priority model", included: false },
            ],
            icon: Zap,
            color: "text-white",
            buttonText: "Upgrade to Creator",
            highlight: true,
            borderColor: "border-pink-500/30",
            glowColor: "from-pink-500/20 to-purple-600/20",
            badge: "Most Popular",
            iconBg: "bg-pink-500/10 text-pink-500",
            buttonClass: "btn-primary shadow-lg shadow-pink-600/20"
        },
        {
            name: "Pro",
            price: "$15",
            period: "/month",
            description: "Maximum power & speed",
            features: [
                { name: "90 AI analyses / month", included: true },
                { name: "Reel + Static + Carousel", included: true },
                { name: "Unlimited saved audits", included: true },
                { name: "Full insights suite", included: true },
                { name: "Instagram Connect*", included: true, badge: "COMING SOON" },
                { name: "Priority model (Thinking)", included: true },
            ],
            icon: Rocket,
            color: "text-white",
            buttonText: "Upgrade to Pro",
            highlight: false,
            borderColor: "border-orange-500/20",
            glowColor: "from-orange-500/20 to-red-600/20",
            buttonClass: "!bg-orange-500 hover:!bg-orange-600 !shadow-lg !shadow-orange-500/20 text-white",
            iconBg: "bg-orange-500/10 text-orange-500"
        }
    ];

    return (
        <section id="pricing" className="py-32 relative z-10 overflow-hidden" aria-labelledby="pricing-heading">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 id="pricing-heading" className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Plan</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Unlock the full potential of your social media strategy with our flexible pricing tiers.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className={`relative rounded-[2rem] p-8 border ${plan.borderColor} bg-black/40 backdrop-blur-xl flex flex-col group`}
                        >
                            {/* Background clipping container */}
                            <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
                                {/* Animated Background Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${plan.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Spotlight effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0 rgba(236, 72, 153, 0)", "0 0 20px rgba(236, 72, 153, 0.4)", "0 0 0 rgba(236, 72, 153, 0)"] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-pink-500/20"
                                    >
                                        {plan.badge}
                                    </motion.div>
                                </div>
                            )}

                            {/* Header */}
                            <div className="mb-8 relative z-10">
                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 ${plan.iconBg} transition-colors duration-300`}
                                >
                                    <plan.icon size={26} />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className={`text-4xl font-bold ${index === 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200' : 'text-white'}`}>{plan.price}</span>
                                    <span className="text-slate-400 text-sm">{plan.period}</span>
                                </div>
                                <p className="text-slate-400 text-sm mt-3">{plan.description}</p>
                            </div>

                            {/* Divider line */}
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                            {/* Features */}
                            <div className="flex-1 space-y-4 mb-8 relative z-10">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3 group/feature">
                                        {feature.included ? (
                                            <div className="mt-0.5 relative">
                                                <div className="absolute inset-0 bg-green-400 blur-[8px] opacity-0 group-hover/feature:opacity-40 transition-opacity" />
                                                <Check size={18} className="text-emerald-400 relative z-10" />
                                            </div>
                                        ) : (
                                            <X size={18} className="text-slate-700 mt-0.5 shrink-0" />
                                        )}
                                        <span className={`text-sm transition-colors duration-300 ${feature.included ? 'text-slate-300 group-hover/feature:text-white' : 'text-slate-600'}`}>
                                            {feature.name}
                                            {feature.badge && (
                                                <span className="ml-2 text-[10px] font-bold bg-orange-500/10 text-orange-400 px-1.5 py-0.5 rounded border border-orange-500/20 inline-block transform translate-y-[-1px]">
                                                    {feature.badge}
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Action */}
                            <div className="relative z-10 mt-auto">
                                <a
                                    href="https://retainer-ai-eta.vercel.app/"
                                    className={`
                                        w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 text-center flex items-center justify-center relative overflow-hidden group/btn
                                        ${plan.buttonClass}
                                    `}
                                >
                                    <span className="relative z-10">{plan.buttonText}</span>
                                    {plan.highlight && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                                    )}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-slate-500 text-sm">
                        *Instagram Connect is rolling out to beta users first. <br className="md:hidden" />
                        <span className="text-pink-500/70 inline-flex items-center gap-1.5 mt-2 md:mt-0 md:ml-2">
                            <Sparkles size={12} /> Priority model uses advanced reasoning for complex audits.
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
