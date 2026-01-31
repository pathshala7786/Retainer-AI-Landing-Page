"use client";

import React from 'react';

interface PhoneMockupProps {
    children: React.ReactNode;
    borderColor?: string;
    className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({
    children,
    borderColor = '#ec4899',
    className = ''
}) => {
    return (
        <div
            className={`mockup-phone ${className}`}
            style={{ borderColor }}
        >
            <div className="mockup-phone-camera"></div>
            <div className="mockup-phone-display relative">
                {children}
            </div>
        </div>
    );
};

export default PhoneMockup;
