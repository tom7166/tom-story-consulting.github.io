// security/config.js
const encryptionKey = process.env.REACT_APP_ENCRYPTION_KEY;

export const securityConfig = {
    encryption: {
        algorithm: 'aes-256-gcm',
        keyLength: 32,
        ivLength: 16,
        saltLength: 64,
        tagLength: 16,
        iterations: 100000,
        key: encryptionKey
    },
    rateLimit: {
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100 // limit each IP to 100 requests per windowMs
    },
    protection: {
        enabled: true,
        maxAttempts: 3,
        blockDuration: 24 * 60 * 60 * 1000, // 24 hours
        message: "Try Harder",
        actions: {
            blockIP: true,
            logAttempt: true,
            notifyAdmin: true
        }
    }
};

export const intrusionDetection = {
    enabled: true,
    rules: {
        sqlInjection: true,
        xss: true,
        traversal: true,
        bruteForce: true
    },
    action: 'block' // block, warn, or log
};
