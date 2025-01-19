import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, company, content, rating }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <div className="flex mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="text-yellow-400 fill-current" size={20} />
      ))}
    </div>
    <p className="text-gray-600 mb-6 italic">"{content}"</p>
    <div className="border-t pt-4">
      <p className="font-semibold text-gray-900">{name}</p>
      <p className="text-gray-600">{role}, {company}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO",
      company: "Tech Solutions Inc.",
      content: "StoryTom transformed our digital presence completely. Our traffic increased by 200% in just 3 months.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Growth Dynamics",
      content: "The DevOps solutions provided by StoryTom streamlined our deployment process significantly.",
      rating: 5
    },
    {
      name: "Michael Brown",
      role: "Founder",
      company: "Innovation Labs",
      content: "Best digital marketing investment we've made. The ROI has been exceptional.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
