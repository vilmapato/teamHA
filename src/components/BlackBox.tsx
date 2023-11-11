// BlackBox.tsx
import React, { ReactNode } from 'react';

interface BlackBoxProps {
  label: string;
  onClick: () => void;
  className?: string;
  children?: ReactNode; // Allow children to be passed
}

const BlackBox: React.FC<BlackBoxProps> = ({ label, onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white py-2 px-4 border border-teal-300 rounded transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110 ${className}`}
    >
      {label}
      {children}
    </button>
  );
};

export default BlackBox;
