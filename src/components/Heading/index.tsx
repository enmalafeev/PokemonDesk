import React from 'react';

interface HeadingProps {
  priority: number;
}

const Heading: React.FC<HeadingProps> = ({ priority, children }) => {
  const CustomTag = `h${priority}` as keyof JSX.IntrinsicElements;

  return <CustomTag>{children}</CustomTag>;
};

export default Heading;
