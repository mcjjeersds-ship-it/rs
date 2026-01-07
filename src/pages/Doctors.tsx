import React from 'react';
import DoctorsSection from '../Components/Main/Doctors/Doctors';

const Doctors: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Doctors
        </h1>
        <DoctorsSection />
      </div>
    </div>
  );
};

export default Doctors;