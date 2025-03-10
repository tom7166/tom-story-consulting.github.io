import React from 'react';
import { securityProtection } from '../../security/protection';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between py-6">
                    <div className="text-3xl font-bold tracking-tight">StoryTom</div>
                    <div className="hidden lg:flex space-x-8">
                        <a href="#tools" className="hover:text-orange-400 transition-colors">Tools</a>
                        <a href="#consulting" className="hover:text-orange-400 transition-colors">Consulting</a>
                        <a href="#agency" className="hover:text-orange-400 transition-colors">Agency</a>
                        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full transition-colors">
                            Free Consultation
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
