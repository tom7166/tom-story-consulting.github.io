export const sanitize = {
    input: (str) => {
        return str.replace(/<[^>]*>/g, '')
                 .replace(/[^\w\s@.-]/gi, '')
                 .trim();
    },
    
    email: (email) => {
        return email.toLowerCase()
                   .trim()
                   .replace(/[^\w\s@.-]/gi, '');
    },

    url: (url) => {
        return encodeURIComponent(url.trim());
    }
};
