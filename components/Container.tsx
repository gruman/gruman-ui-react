import React, { ReactNode } from 'react';
import { useTheme } from '../theme/ThemeContext';

interface ContainerProps {
  children: ReactNode;
  maxWidth?: string;
  paddingLeft?: string;
  paddingRight?: string;
  margin?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = '800px',
  paddingLeft = '1rem',
  paddingRight = '1rem',
  margin = '0 auto',
}) => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        maxWidth,
        paddingLeft,
        paddingRight,
        margin,
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
