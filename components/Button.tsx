import React from 'react';
import { useTheme } from '../theme/ThemeContext';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  const { theme } = useTheme(); // Get theme from context

  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: theme.primary,
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      {title}
    </button>
  );
};

export default Button;
