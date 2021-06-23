import styled from 'styled-components';
import { TextProps } from './interface';

export const Text = styled.h1<TextProps>`
  font-size: ${props => props.typeStyle.fontSize};
  line-height: ${props => props.typeStyle.lineHeight};
  font-family: ${props => props.typeStyle.fontFamily};
  font-weight: ${props => props.typeStyle.fontWeight};
  color: ${props => props.color};
`;
