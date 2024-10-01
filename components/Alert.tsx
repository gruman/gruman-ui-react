import React from 'react';
import { useTheme } from '../theme/ThemeContext';

interface AlertProps {
  message: string;
  type: 'success' | 'error';
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const { theme } = useTheme(); // Get theme from context
  const backgroundColor = type === 'success' ? theme.success : theme.error;
  const border = type === 'success' ? theme.successBorder : theme.error;

  return (
    <div
      style={{
        padding: '1rem',
        backgroundColor: backgroundColor,
        border: '1px solid ' + border,
        color: theme.text,
        borderRadius: '0.5rem',
        marginBottom: '1rem',
      }}
    >
      {message}
    </div>
  );
};

export default Alert;
