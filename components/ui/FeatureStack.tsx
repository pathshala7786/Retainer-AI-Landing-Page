"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

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

    return (
        <div className="relative w-full max-w-md mx-auto h-[500px] flex items-center justify-center">
            {/* Stack Container */}
            <div
                className="relative w-full h-full cursor-pointer group"
                onClick={moveFrontToBack}
            >
                <AnimatePresence mode='popLayout'>
                    {cards.map((feature, index) => {
                        // Only render top 3 cards for performance/visuals matches "stack" snippet logic
                        if (index > 2) return null;

                        return (
                            <motion.div
                                layoutId={`card-${feature.id}`}
                                key={feature.id}
                                initial={false}
                                animate={{
                                    scale: 1 - index * 0.05,
                                    y: index * 15,
                                    zIndex: cards.length - index,
                                    opacity: 1 - index * 0.2,
                                }}
                                exit={{
                                    scale: 0.9,
                                    opacity: 0
                                }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className={`
                  absolute top-0 left-0 w-full h-full 
                  rounded-3xl border border-white/10 
                  bg-[#0A0A0A] backdrop-blur-xl 
                  shadow-[0_0_30px_rgba(0,0,0,0.5)]
                  overflow-hidden flex flex-col
                  ${index === 0 ? 'shadow-[0_0_50px_rgba(236,72,153,0.15)] ring-1 ring-white/10' : ''}
                `}
                            >
                                {/* Card Body logic from user request */}

                                <div className="relative h-1/2 w-full bg-gradient-to-br from-white/5 to-transparent">
                                    <Image
                                        src={feature.imageSrc}
                                        alt={feature.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 448px"
                                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                                </div>

                                {/* Content Area */}
                                <div className="p-8 flex flex-col flex-1 relative">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center border border-pink-500/30 mb-4 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                                        <feature.icon className="text-pink-400" size={24} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                                        {feature.description}
                                    </p>

                                    <div className="mt-auto pt-6 flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest opacity-60">
                                        <span>Tap for next</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default FeatureStack;
