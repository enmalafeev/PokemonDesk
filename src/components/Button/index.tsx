import React from 'react';
import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button type="button" className={s.root}>
    {children}
  </button>
);

export default Button;
