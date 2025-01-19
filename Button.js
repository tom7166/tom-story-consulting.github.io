import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-colors';
  
  const variants = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white',
    secondary: 'border-2 border-white hover:bg-white hover:text-blue-900 text-white',
    outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
