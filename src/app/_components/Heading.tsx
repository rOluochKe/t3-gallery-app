import React from 'react';

interface HeadingProps {
  title: string;
  subtitle?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-left my-8">
      <h3 className="text-light text-2xl font-bold">{title}</h3>
      <h4 className="text-accent text-lg">{subtitle}</h4>
    </div>
  );
};

export default Heading;
