import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

export enum BtnColors {
  green = 'green',
  yellow = 'yellow',
}
interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  width?: number;
  color?: BtnColors;
  size?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, width, color = BtnColors.green, size }) => (
  <button type="button" className={cn(s.root, s[color], className)} onClick={onClick}>
    {children}
  </button>
);

export default Button;
