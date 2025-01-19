// src/security/WrapperSecurity.js
import React, { useEffect, useState } from 'react';
import { securityProtection } from './intrusion-prevention';
import { encryption } from './encrypt';

const WrapperSecurity = ({ children }) => {
    const [isSecure, setIsSecure] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const MAX_ATTEMPTS = 3;

    useEffect(() => {
        // Initialize security measures
        const initSecurity = () => {
            // Monitor for suspicious activities
            document.addEventListener('contextmenu', (e) => e.preventDefault());
            document.addEventListener('keydown', (e) => {
                // Prevent dev tools and common hacking shortcuts
                if (
                    (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                    (e.ctrlKey && e.shiftKey && e.key === 'J') ||
                    (e.ctrlKey && e.key === 'U')
                ) {
                    e.preventDefault();
                    handleSecurityViolation();
                }
            });

            // Monitor network requests
            monitorNetworkRequests();

            // Set initial security state
            setIsSecure(true);
        };

        initSecurity();
    }, []);

    // Monitor network requests
    const monitorNetworkRequests = () => {
        const originalFetch = window.fetch;
        window.fetch = async (...args) => {
            try {
                if (securityProtection.detectIntrusion(args)) {
                    handleSecurityViolation();
                    return null;
                }
                const response = await originalFetch(...args);
                return response;
            } catch (error) {
                handleSecurityViolation();
                return null;
            }
        };
    };

    // Handle security violations
    const handleSecurityViolation = () => {
        setAttempts(prev => {
            const newAttempts = prev + 1;
            if (newAttempts >= MAX_ATTEMPTS) {
                terminateSession();
            }
            return newAttempts;
        });

        // Log attempt
        const attemptData = encryption.encrypt(JSON.stringify({
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            ipAddress: 'Logged Server Side'
        }));

        // Send to security logging endpoint
        fetch('/api/security/log', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(attemptData)
        }).catch(() => {
            // Silent fail to not reveal security measures
        });
    };

    // Terminate session on multiple violations
    const terminateSession = () => {
        // Display "Try Harder" message
        const message = document.createElement('div');
        message.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: black;
                color: red;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 48px;
                z-index: 99999;
            ">
                Try Harder
            </div>
        `;
        document.body.appendChild(message);

        // Close window after delay
        setTimeout(() => {
            window.location.href = 'about:blank';
            window.close();
        }, 2000);
    };

    // Sanitize content
    const sanitizeContent = (content) => {
        if (typeof content === 'string') {
            return content.replace(/<script.*?>.*?<\/script>/gi, '')
                         .replace(/on\w+="[^"]*"/gi, '')
                         .replace(/javascript:/gi, '');
        }
        return content;
    };

    // Wrap children with security measures
    const secureChildren = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                onError: handleSecurityViolation,
                dangerouslySetInnerHTML: undefined,
                ref: null
            });
        }
        return child;
    });

    return (
        <div id="secure-wrapper" className="security-wrapper">
            {isSecure ? secureChildren : <div>Initializing Security...</div>}
        </div>
    );
};

export default WrapperSecurity;
