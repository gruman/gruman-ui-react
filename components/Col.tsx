import React, { ReactNode } from 'react';

interface ColProps {
  children: ReactNode;
}

const Col: React.FC<ColProps> = ({
  children,
}) => {

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {children}
    </div>
  );
};

export default Col;
