// Advanced security system with "Try Harder" response
export const securitySystem = {
    // Detects suspicious behavior
    detectIntrusion: (req) => {
        const suspiciousPatterns = [
            /union\s+select/i,
            /<script>/i,
            /\.\.\/|\.\.\\/, // path traversal
            /exec\(|system\(|eval\(/i
        ];

        const requestData = JSON.stringify(req).toLowerCase();
        return suspiciousPatterns.some(pattern => pattern.test(requestData));
    },

    // Handles intrusion attempts
    handleIntrusion: () => {
        const response = {
            message: "Try Harder",
            action: () => {
                window.location.href = "about:blank";
                window.close();
            }
        };
        return response;
    }
};
