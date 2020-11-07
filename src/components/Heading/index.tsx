import React from 'react';

interface HeadingProps {
  priority: number;
  className: string;
}

const Heading: React.FC<HeadingProps> = ({ priority, children, className = null }) => {
  const CustomTag = `h${priority}` as keyof JSX.IntrinsicElements;

  return <CustomTag>{children}</CustomTag>;
};

export default Heading;
