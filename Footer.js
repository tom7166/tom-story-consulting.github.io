import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { securityProtection } from '../../security/protection';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">StoryTom</h3>
                        <p className="text-gray-400">Digital Marketing & DevOps Solutions</p>
                        <p className="text-gray-400">Buffalo, NY</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#seo" className="hover:text-orange-400">SEO</a></li>
                            <li><a href="#marketing" className="hover:text-orange-400">Digital Marketing</a></li>
                            <li><a href="#devops" className="hover:text-orange-400">DevOps</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#about" className="hover:text-orange-400">About</a></li>
                            <li><a href="#careers" className="hover:text-orange-400">Careers</a></li>
                            <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <a 
                            href="mailto:contact@storytom.com" 
                            className="text-orange-400 hover:text-orange-300 flex items-center"
                        >
                            <Mail className="mr-2" size={20} />
                            contact@storytom.com
                        </a>
                        <div className="mt-4 flex items-center text-gray-400">
                            <MapPin className="mr-2" size={20} />
                            Buffalo, NY
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} StoryTom. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
