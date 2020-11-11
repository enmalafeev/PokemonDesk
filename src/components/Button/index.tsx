import React from 'react';
import s from './Button.module.scss';

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  width?: number;
  color?: string;
  size?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, width, color, size }) => (
  <button type="button" className={s.root} onClick={onClick}>
    {children}
  </button>
);

export default Button;
