import React, { ReactNode } from 'react';

interface RowProps {
  children: ReactNode;
}

const Row: React.FC<RowProps> = ({
  children,
}) => {

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      {children}
    </div>
  );
};

export default Row;
