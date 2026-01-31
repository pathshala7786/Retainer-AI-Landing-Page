"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import MockupFrame from "./MockupFrame";
import Image from "next/image";

interface Step {
    title: string;
    description: string;
    mediaType: "video" | "image";
    mediaSrc: string;
}

interface StickyScrollProps {
    steps: Step[];
}

const StickyScroll: React.FC<StickyScrollProps> = ({ steps }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeCard, setActiveCard] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = steps.map((_, index) => index / steps.length);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    return (
        <div ref={containerRef} className="relative w-full flex flex-col items-center justify-start min-h-[300vh] py-20 px-4 md:px-10">

            {/* Sticky Phone Container */}
            <div className="sticky top-20 h-[80vh] w-full max-w-md flex items-center justify-center z-10">
                <div className="relative w-full h-full">
                    <MockupFrame glowColor={activeCard % 2 === 0 ? "pink" : "purple"} className="h-full">
                        {/* Render Media based on activeCard */}
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full"
                            >
                                {step.mediaType === "video" ? (
                                    <video
                                        src={step.mediaSrc}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                ) : (
                                    <Image
                                        src={step.mediaSrc}
                                        alt={step.title}
                                        fill
                                        className="object-cover object-top"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </MockupFrame>
                </div>
            </div>

            {/* Scrolling Text Content */}
            <div className="relative w-full max-w-5xl mx-auto -mt-[80vh] z-20">
                {steps.map((step, index) => (
                    <div key={index} className="h-[100vh] flex items-center justify-start md:justify-end pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="max-w-md p-8 rounded-3xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl pointer-events-auto"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-lg text-slate-300 leading-relaxed">{step.description}</p>
                        </motion.div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default StickyScroll;
