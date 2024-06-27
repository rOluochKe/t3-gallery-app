import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'active' | 'hover';
  width?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'default', width }) => {
  const baseStyles = 'text-light rounded-lg px-4 py-2';
  const variantStyles = {
    default: 'bg-transparent',
    active: 'bg-secondary',
    hover: 'bg-accent',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
      style={{ width }}
    >
      {children}
    </button>
  );
};

export default Button;
