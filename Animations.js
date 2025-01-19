// src/components/common/Animations.js
import React from 'react';

export const FadeIn = ({ children, delay = 0, duration = 500 }) => (
    <div
        className="opacity-0 animate-fadeIn"
        style={{
            animation: `fadeIn ${duration}ms ease-out ${delay}ms forwards`
        }}
    >
        {children}
    </div>
);

export const SlideUp = ({ children, delay = 0 }) => (
    <div
        className="transform translate-y-8 opacity-0"
        style={{
            animation: 'slideUp 500ms ease-out forwards',
            animationDelay: `${delay}ms`
        }}
    >
        {children}
    </div>
);

export const ScaleIn = ({ children }) => (
    <div className="transform scale-95 opacity-0 animate-scaleIn">
        {children}
    </div>
);
