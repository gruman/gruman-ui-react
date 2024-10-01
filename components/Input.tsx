import React, { ChangeEvent } from 'react';
import { useTheme } from '../theme/ThemeContext';

interface InputProps {
  value: string;
  type: string;
  placeholder: string;
  onChange: (text: string) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange, type, placeholder }) => {
  const { theme } = useTheme();

  const styles = {
    input: {
      backgroundColor: theme.background,
      color: theme.text,
    },
    textarea: {
      backgroundColor: theme.background,
      color: theme.text,
      height: '5rem',
    },
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  if (type === 'textarea') {
    return (
      <textarea
        onChange={handleChange}
        style={styles.textarea}
        value={value}
        placeholder={placeholder}
      />
    );
  } else {
    return (
      <input
        type={type}
        onChange={handleChange}
        style={styles.input}
        value={value}
        placeholder={placeholder}
      />
    );
  }
};

export default Input;
