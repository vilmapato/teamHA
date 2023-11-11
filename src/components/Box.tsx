import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const BlackBox: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white py-2 px-4 border border-black rounded transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110"
    >
      {label}
    </button>
  );
};

export default BlackBox;
