import React from 'react';

interface BoxProps {
  children: React.ReactNode; // Accept any valid React node
  className?: string; // Optional className string
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Box;
