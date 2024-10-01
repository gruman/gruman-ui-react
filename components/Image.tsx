import React from 'react';
import { useTheme } from '../theme/ThemeContext';

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  type: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, width = '100%', type = null }) => {

  const { theme } = useTheme();

  const styles = {
    image: {
      width: width
    },
    polaroid: {
      borderRadius: '0.5rem',
      borderColor: '#999',
      width: width,
      borderWidth: '1px',
      borderStyle: 'solid',
      padding: '0.5rem',
      textAlign: 'center',
      marginBottom: '1rem',
      backgroundColor: '#fff'
    },
    polaroidImage: {
      width: '100%',
      border: '1px solid #999',
      borderRadius: '0.25rem'
    }
  }

  if (type === 'polaroid') {
    return (
      <div style={styles.polaroid}>
        <img
          src={src}
          alt={alt}
          style={styles.polaroidImage}
        />
        <p>{alt}</p>
      </div>
    )
  }
  else {
    return (
      <img
        src={src}
        alt={alt}
        style={styles.image}
      />
    );
  };
}

export default Image;