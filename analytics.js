export const analytics = {
  initialize: () => {
    // Google Analytics setup
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', process.env.REACT_APP_GA_TRACKING);
  },

  trackEvent: (category, action, label) => {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label
      });
    }
  },

  trackPageview: (page) => {
    if (window.gtag) {
      window.gtag('config', process.env.REACT_APP_GA_TRACKING, {
        page_path: page
      });
    }
  }
};
