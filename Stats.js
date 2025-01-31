import React from 'react';
import { Users, TrendingUp, DollarSign } from 'lucide-react';

const StatCard = ({ number, label, icon: Icon }) => (
  <div className="bg-white p-8 rounded-lg shadow-xl text-center">
    {Icon && <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />}
    <div className="text-4xl font-bold text-blue-900 mb-2">{number}</div>
    <p className="text-gray-600">{label}</p>
  </div>
);

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "97%",
      label: "Client Retention Rate"
    },
    {
      icon: TrendingUp,
      number: "450+",
      label: "Successful Projects"
    },
    {
      icon: DollarSign,
      number: "$2.4M+",
      label: "Revenue Generated"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
