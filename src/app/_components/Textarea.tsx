import React from 'react';

interface TextareaProps {
  label: string;
  placeholder: string;
  helperText?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, placeholder, helperText }) => {
  return (
    <div className="mb-4">
      <label className="block text-light mb-1">{label}</label>
      <textarea
        className="w-full p-2 border border-accent rounded-lg"
        placeholder={placeholder}
      />
      {helperText && <p className="text-sm text-accent mt-1">{helperText}</p>}
    </div>
  );
};

export default Textarea;
