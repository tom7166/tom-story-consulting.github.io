import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-8">
                        Want More Traffic & Sales?
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12">
                        Join 1,000+ businesses in Buffalo that use StoryTom to get more traffic and sales
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                        <button 
                            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors w-full md:w-auto flex items-center justify-center"
                            onClick={() => window.location.href='#contact'}
                        >
                            Get My Free Analysis
                            <ChevronRight className="ml-2" size={20} />
                        </button>
                        <button 
                            className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors w-full md:w-auto"
                            onClick={() => window.location.href='#services'}
                        >
                            Watch How It Works
                        </button>
                    </div>
                </div>
                <div className="mt-16 max-w-5xl mx-auto">
                    <img 
                        src="/images/hero-bg.jpg" 
                        alt="Digital Marketing and DevOps Solutions" 
                        className="rounded-lg shadow-xl w-full object-cover"
                        style={{ height: '400px' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
