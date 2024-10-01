import React, { ReactNode } from 'react';
import { useTheme } from '../theme/ThemeContext';

interface ContainerProps {
  children: ReactNode;
  maxWidth?: string;
  paddingLeft?: string;
  paddingRight?: string;
  margin?: string;
  paddingBottom?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = '800px',
  paddingLeft = 0,
  paddingRight = 0,
  margin = '0 auto',
  paddingBottom = '1rem'
}) => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        maxWidth,
        paddingLeft,
        paddingRight,
        margin,
        paddingBottom,
        backgroundColor: theme.background,
        color: theme.text
      }}
    >
      {children}
    </div>
  );
};

export default Container;
