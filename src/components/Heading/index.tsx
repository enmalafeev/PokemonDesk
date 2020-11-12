import React from 'react';

interface HeadingProps {
  priority: number;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ priority, children, className }) => {
  const CustomTag = `h${priority}` as keyof JSX.IntrinsicElements;

  return <CustomTag className={className}>{children}</CustomTag>;
};

export default Heading;
