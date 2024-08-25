import React from 'react';
import s from './ErrorMessage.module.css';

interface ErrorProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorProps> = ({ message = "Error" }) => {
  return (
    <div className={s.errorMessage}>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
