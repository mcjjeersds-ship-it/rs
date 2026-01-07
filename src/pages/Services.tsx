import React from 'react';
import ServicesSection from '../Components/Main/Services/Services';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h1>
        <ServicesSection />
      </div>
    </div>
  );
};

export default Services;