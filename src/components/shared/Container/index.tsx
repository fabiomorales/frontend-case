import React, { FC, ReactNode } from 'react';
import { ContainerProps } from 'react-grid-system';
import * as Styles from './styles';

export interface ContainerCustomProps extends ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerCustomProps> = ({ children, ...props }: any) => {
  return <Styles.Container {...props}>{children}</Styles.Container>;
};

export default Container;
