export const performanceMonitor = {
    metrics: {},
    
    startTracking: (metricName) => {
        performanceMonitor.metrics[metricName] = performance.now();
    },

    endTracking: (metricName) => {
        const startTime = performanceMonitor.metrics[metricName];
        const endTime = performance.now();
        return endTime - startTime;
    },

    logPerformance: (data) => {
        // Log performance data securely
        if (process.env.NODE_ENV === 'production') {
            // Send to analytics service
        } else {
            console.log('Performance:', data);
        }
    }
};
