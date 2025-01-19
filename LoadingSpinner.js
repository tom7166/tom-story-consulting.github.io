import React from 'react';

const LoadingSpinner = ({ size = 'medium' }) => {
  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className={`${sizes[size]} animate-spin`}>
      <div className="border-4 border-blue-600 border-t-transparent rounded-full w-full h-full"></div>
    </div>
  );
};

export default LoadingSpinner;
