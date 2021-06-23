import styled from 'styled-components';
import { Colors } from 'styles';

export const Button = styled.button`
  min-height: 48px;
  width: initial;
  padding: 12px 32px;

  display: flex;
  background-color: ${Colors.PRIMARY};
  border: none;
  border-radius: 30px;

  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;
  text-align: center;
  justify-content: center;

  &:hover {
    background-color: ${Colors.PRIMARY_HOVER};
  }

  label,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    cursor: pointer;
  }
`;
