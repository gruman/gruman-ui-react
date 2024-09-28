import React, { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
  paddingLeft?: string;
  paddingRight?: string;
}

const Content: React.FC<ContentProps> = ({
  children,
  paddingLeft = '1rem',
  paddingRight = '1rem'
}) => {

  return (
    <div
      style={{
        paddingLeft,
        paddingRight
      }}
    >
      {children}
    </div>
  );
};

export default Content;
