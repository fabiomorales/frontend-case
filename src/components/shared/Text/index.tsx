import React, { FC, ReactNode } from 'react';
import { Colors } from 'styles';
import StyleGuide, { tags } from 'styles/styleGuide';
import * as Styles from './styles';

export interface TextProps {
  color: keyof typeof Colors;
  type: keyof typeof StyleGuide['typography'];
  children: ReactNode;
  onClick?: () => void;
}

const Text: FC<TextProps> = ({
  color: colorType,
  type,
  children,
  onClick,
  ...props
}: TextProps) => {
  const tagType = tags[type] as keyof JSX.IntrinsicElements;

  const typeStyle = StyleGuide.typography[type];

  const color = Colors[colorType];

  return (
    <Styles.Text
      as={tagType}
      typeStyle={typeStyle}
      color={color}
      {...props}
      onClick={onClick}
    >
      {children}
    </Styles.Text>
  );
};

export default Text;
