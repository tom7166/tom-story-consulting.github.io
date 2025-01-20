export const loadTester = {
    checkResources: async () => {
        const start = performance.now();
        
        // Check image loading
        const images = document.querySelectorAll('img');
        const imageLoadTimes = [];
        
        images.forEach(img => {
            const loadTime = img.complete ? 0 : new Promise(resolve => {
                img.onload = () => resolve(performance.now() - start);
            });
            imageLoadTimes.push(loadTime);
        });

        return {
            loadTimes: await Promise.all(imageLoadTimes),
            totalTime: performance.now() - start
        };
    }
};
