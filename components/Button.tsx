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
        padding: '0.5rem 1rem',
        backgroundColor: theme.text,
        color: theme.background,
        border: 'none',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        textTransform: 'uppercase',
        marginBottom: '1rem',
      }}
    >
      {title}
    </button>
  );
};

export default Button;
