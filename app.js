import React, { useEffect } from 'react';
import { securityProtection } from './security/protection';
import { securityHeaders } from './security/headers';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

// Initialize security
const initSecurity = () => {
    // Add security headers
    Object.entries(securityHeaders.ContentSecurity).forEach(([key, value]) => {
        document.head.appendChild(
            Object.assign(document.createElement('meta'), {
                httpEquiv: key,
                content: value
            })
        );
    });

    // Add event listeners for security monitoring
    document.addEventListener('DOMContentLoaded', () => {
        securityProtection.validateRequest({
            url: window.location.href,
            headers: {}
        });
    });
};

const App = () => {
    useEffect(() => {
        initSecurity();
    }, []);

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Services />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
