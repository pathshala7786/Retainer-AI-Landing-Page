"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

interface Feature {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    imageSrc: string;
}

interface FeatureStackProps {
    features: Feature[];
}

const FeatureStack: React.FC<FeatureStackProps> = ({ features }) => {
    const [cards, setCards] = useState(features);

    const moveFrontToBack = () => {
        setCards((prev) => {
            const newCards = [...prev];
            const frontCard = newCards.shift();
            if (frontCard) newCards.push(frontCard);
            return newCards;
        });
    };

    const activeFeature = cards[0];

    return (
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full max-w-6xl mx-auto px-4">
            {/* Left Content Area: Dynamic Text */}
            <div className="flex-1 w-full text-left lg:max-w-md">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFeature.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center border border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.2)]">
                            <activeFeature.icon className="text-pink-400" size={32} />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                                {activeFeature.title}
                            </h3>
                            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
                                {activeFeature.description}
                            </p>
                        </div>

                        <div className="pt-4 flex items-center gap-3 text-xs font-mono text-pink-500/60 uppercase tracking-[0.3em]">
                            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                            <span>Interactive Live Demo</span>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Right Stack Area: Phone Mockup */}
            <div className="relative w-full max-w-[340px] md:max-w-md h-[750px] md:h-[850px] flex items-center justify-center">
                {/* Stack Container */}
                <div
                    className="relative w-full h-full cursor-pointer group"
                    onClick={moveFrontToBack}
                >
                    <AnimatePresence mode='popLayout'>
                        {cards.map((feature, index) => {
                            // Only render top 3 cards for performance/visuals
                            if (index > 2) return null;

                            return (
                                <motion.div
                                    layoutId={`card-${feature.id}`}
                                    key={feature.id}
                                    initial={false}
                                    animate={{
                                        scale: 1 - index * 0.05,
                                        y: index * 10,
                                        zIndex: (cards.length - index) * 10,
                                        opacity: 1 - index * 0.2,
                                    }}
                                    exit={{
                                        scale: 0.8,
                                        opacity: 0,
                                        x: -150,
                                        rotate: -15
                                    }}
                                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                    className={`
                                        absolute top-0 left-0 w-full aspect-[462/978]
                                        rounded-[3rem] overflow-hidden
                                        ${index === 0 ? 'shadow-[0_0_80px_rgba(236,72,153,0.3)]' : 'shadow-2xl'}
                                    `}
                                >
                                    <PhoneMockup
                                        borderColor={index === 0 ? "#ec4899" : "#333"}
                                        className="w-full h-full"
                                        showCamera={false}
                                    >
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={feature.imageSrc}
                                                alt={feature.title}
                                                fill
                                                priority={index === 0}
                                                className="object-cover object-top scale-[1.18]"
                                                sizes="(max-width: 768px) 100vw, 384px"
                                            />

                                            {/* Subtle Gradient to soften hard edges if any */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                                            {/* Next Indicator */}
                                            {index === 0 && (
                                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <span className="text-[10px] uppercase tracking-widest text-white/70">Tap to Next</span>
                                                </div>
                                            )}
                                        </div>
                                    </PhoneMockup>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default FeatureStack;
