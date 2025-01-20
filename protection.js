// security/protection.js
import { securityConfig, intrusionDetection } from './config';
import { securityHeaders } from './headers';

class SecurityProtection {
    constructor() {
        this.blockedIPs = new Set();
        this.attemptCounts = new Map();
    }

    validateRequest(req) {
        if (this.isBlocked(req.ip)) {
            this.terminateConnection(req);
            return false;
        }

        if (this.detectIntrusion(req)) {
            this.handleIntrusion(req);
            return false;
        }

        return true;
    }

    detectIntrusion(req) {
        // Advanced intrusion detection logic
        const patterns = {
            sql: /union|select|insert|delete|from|where|drop|update|<|>/i,
            xss: /<script|javascript:|data:|eval\(|expression\(|vbscript:|onload=|onclick=|onerror=/i,
            traversal: /\.\.|\/etc\/|\/var\/|\/usr\/|\/root\/|\/home\//i
        };

        const requestData = {
            url: req.url,
            body: JSON.stringify(req.body),
            headers: JSON.stringify(req.headers)
        };

        return Object.entries(patterns).some(([type, pattern]) => {
            return Object.values(requestData).some(value => pattern.test(value));
        });
    }

    handleIntrusion(req) {
        this.incrementAttempts(req.ip);
        
        if (this.getAttempts(req.ip) >= securityConfig.protection.maxAttempts) {
            this.blockIP(req.ip);
            this.terminateConnection(req);
        }
    }

    terminateConnection(req) {
        // Send "Try Harder" message and terminate
        const response = {
            status: 403,
            message: securityConfig.protection.message
        };
        
        // Force browser to close
        const script = `
            alert("${securityConfig.protection.message}");
            window.close();
            window.location = "about:blank";
        `;
        
        return {
            ...response,
            headers: {
                ...securityHeaders.ContentSecurity,
                'Content-Type': 'application/javascript'
            },
            body: script
        };
    }

    blockIP(ip) {
        this.blockedIPs.add(ip);
        setTimeout(() => {
            this.blockedIPs.delete(ip);
            this.attemptCounts.delete(ip);
        }, securityConfig.protection.blockDuration);
    }

    isBlocked(ip) {
        return this.blockedIPs.has(ip);
    }

    incrementAttempts(ip) {
        const current = this.attemptCounts.get(ip) || 0;
        this.attemptCounts.set(ip, current + 1);
    }

    getAttempts(ip) {
        return this.attemptCounts.get(ip) || 0;
    }
}

export const securityProtection = new SecurityProtection();
