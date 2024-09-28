import React from 'react';
import { useTheme } from '../theme/ThemeContext';

interface AlertProps {
  message: string;
  type: 'success' | 'error';
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const { theme } = useTheme(); // Get theme from context
  const backgroundColor = type === 'success' ? theme.success : theme.error;

  return (
    <div
      style={{
        padding: '10px',
        backgroundColor,
        color: '#fff',
        borderRadius: '4px',
        margin: '10px 0',
      }}
    >
      {message}
    </div>
  );
};

export default Alert;
