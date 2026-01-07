import React from 'react';
import ReviewsSection from '../Components/Main/Review/Reviews';

const Reviews: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Patient Reviews
        </h1>
        <ReviewsSection />
      </div>
    </div>
  );
};

export default Reviews;