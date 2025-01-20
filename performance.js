// Performance optimization utilities
export const performanceOptimizations = {
    // Image lazy loading
    lazyLoadImages: () => {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    },

    // Component lazy loading
    lazyLoadComponent: (component) => {
        return React.lazy(() => import(`../components/${component}`));
    },

    // Resource preloading
    preloadResources: () => {
        const resources = [
            '/assets/hero-bg.webp',
            '/assets/logo.svg',
            '/fonts/Inter-var.woff2'
        ];

        resources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = resource.endsWith('.woff2') ? 'font' : 
                      resource.endsWith('.svg') ? 'image' : 'image';
            document.head.appendChild(link);
        });
    }
};
