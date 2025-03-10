export const siteLinks = {
    main: {
        home: '/',
        services: '/services',
        about: '/about',
        contact: '/contact'
    },
    services: {
        seo: '/services/seo',
        devops: '/services/devops',
        marketing: '/services/digital-marketing'
    },
    anchors: {
        consultation: '#consultation',
        testimonials: '#testimonials',
        stats: '#stats',
        contact: '#contact-form'
    }
};

// Link validation function
export const validateLink = (link) => {
    if (link.startsWith('#')) {
        const element = document.getElementById(link.substring(1));
        return !!element;
    }
    return true;
};
