import React from 'react';

interface InputFieldProps {
  label: string;
  placeholder: string;
  helperText?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, helperText }) => {
  return (
    <div className="mb-4">
      <label className="block text-light mb-1">{label}</label>
      <input
        className="w-full p-2 border border-accent rounded"
        placeholder={placeholder}
      />
      {helperText && <p className="text-sm text-accent mt-1">{helperText}</p>}
    </div>
  );
};

export default InputField;
