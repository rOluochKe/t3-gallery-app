import React from 'react';

interface HeadingProps {
  title: string;
  subtitle?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-left my-8">
      <h1 className="text-light text-3xl font-bold">{title}</h1>
      <h2 className="text-accent text-xl mt-2">{subtitle}</h2>
    </div>
  );
};

export default Heading;
