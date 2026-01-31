"use client";

import React from 'react';

interface MockupFrameProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: "pink" | "purple" | "blue";
}

const MockupFrame: React.FC<MockupFrameProps> = ({ children, className = "", glowColor = "pink" }) => {
    const glowClasses = {
        pink: "shadow-[0_20px_60px_-15px_rgba(236,72,153,0.3)] group-hover:shadow-[0_30px_80px_-15px_rgba(236,72,153,0.5)]",
        purple: "shadow-[0_20px_60px_-15px_rgba(168,85,247,0.3)] group-hover:shadow-[0_30px_80px_-15px_rgba(168,85,247,0.5)]",
        blue: "shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_30px_80px_-15px_rgba(59,130,246,0.5)]",
    };

    return (
        <div className={`relative group perspective-1000 ${className}`}>
            {/* Glow Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500`} />

            {/* Card Container with Tilt */}
            <div className={`
            relative bg-black rounded-[24px] border border-white/10 overflow-hidden
            transform transition-all duration-500 ease-out 
            group-hover:scale-[1.02] group-hover:-rotate-y-2 group-hover:rotate-x-2
            ${glowClasses[glowColor]} w-full h-[500px]
        `}>
                {/* Status Bar Mask - Cuts off top 60px of the image */}
                <div className="absolute inset-0 bg-black z-0">
                    <div className="relative w-full h-full -mt-[60px]"> {/* Negative margin to crop status bar */}
                        {children}
                    </div>
                </div>

                {/* Screen Glare/Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 z-10" />
            </div>
        </div>
    );
};

export default MockupFrame;
