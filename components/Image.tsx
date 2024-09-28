import React from 'react';
import { useTheme } from '../theme/ThemeContext';

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, width = '100%' }) => {
  const { theme } = useTheme();

  return (
    <img
      src={src}
      alt={alt}
      style={{
        width,
        border: `2px solid ${theme.primary}`,
        borderRadius: '4px',
      }}
    />
  );
};

export default Image;
