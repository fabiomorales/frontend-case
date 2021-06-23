import React, { FC, ReactNode } from 'react';
import * as Styles from './styles';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <Styles.Button className={className} onClick={onClick}>
      {children}
    </Styles.Button>
  );
};

export default Button;
