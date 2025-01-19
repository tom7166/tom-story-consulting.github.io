import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

And for Header.js:
```javascript
const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between py-6">
                    <div className="text-3xl font-bold tracking-tight">StoryTom</div>
                    <div className="hidden lg:flex space-x-8">
                        <a href="#services" className="hover:text-orange-400 transition-colors">Services</a>
                        <a href="#marketing" className="hover:text-orange-400 transition-colors">Digital Marketing</a>
                        <a href="#devops" className="hover:text-orange-400 transition-colors">DevOps</a>
                        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full transition-colors">
                            Free Consultation
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};
