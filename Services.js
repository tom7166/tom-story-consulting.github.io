import React from 'react';
import { TrendingUp, Code, BarChart, ArrowRight } from 'lucide-react';
import { securityProtection } from '../../security/protection';

const ServiceCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                <Icon className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            <a href="#learn-more" className="text-orange-500 hover:text-orange-600 flex items-center">
                Learn More <ArrowRight className="ml-2" size={20} />
            </a>
        </div>
    );
};

const Services = () => {
    const services = [
        {
            icon: TrendingUp,
            title: "SEO Optimization",
            description: "Dominate search rankings with our proven SEO strategies and content optimization."
        },
        {
            icon: Code,
            title: "DevOps Solutions",
            description: "Streamline your development process with automated deployment and scaling."
        },
        {
            icon: BarChart,
            title: "Digital Marketing",
            description: "Drive results with data-driven marketing campaigns and analytics."
        }
    ];

    return (
        <section id="services" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                    <p className="text-xl text-gray-600">
                        Comprehensive digital solutions for your business growth
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
