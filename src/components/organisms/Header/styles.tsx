import { Flex as FlexComponent, Text } from 'components/shared';
import styled from 'styled-components';
import { Colors } from 'styles';

export const Header = styled.header`
  background-color: ${Colors.GRAYS_WITHE};
`;

export const LoginText = styled(Text)`
  text-decoration: none;
  cursor: pointer;
  margin-right: 40px;

  &:hover {
    color: ${Colors.PRIMARY};
  }
`;

export const Flex = styled(FlexComponent)`
  height: 64px;

  @media screen and (min-width: 768px) {
    height: 72px;
  }

  @media screen and (min-width: 1160px) {
    height: 88px;
  }

  .navBar {
    display: none;

    @media screen and (min-width: 1160px) {
      display: block;
      margin-left: 32px;
    }

    @media screen and (min-width: 1280px) {
      margin-left: 64px;
    }
  }
`;

export const ButtonContainer = styled(FlexComponent)`
  margin-left: auto;

  .toogleMenu {
    margin-left: 30px;

    @media screen and (min-width: 1160px) {
      display: none;
    }
  }
`;
