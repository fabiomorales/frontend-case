import { Text } from 'components/shared';
import styled from 'styled-components';
import { Colors } from 'styles';

export const NavText = styled(Text)`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${Colors.PRIMARY};
  }
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin-right: 32px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
