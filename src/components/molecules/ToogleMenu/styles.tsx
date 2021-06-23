import { BaseAnimation } from 'components/atoms';
import { Text } from 'components/shared';
import styled, { keyframes } from 'styled-components';
import { Colors } from 'styles';

export interface MenuContainerProps {
  open: boolean;
}

export const MenuContainer = styled.div<MenuContainerProps>`
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;

  :after,
  :before {
    background-color: rgb(254, 62, 109);
    width: 100%;
    content: '';
    height: 1px;
    position: absolute;
    transition: transform 0.3s ease-in-out 0s;
  }

  :after {
    top: ${({ open }) => (open ? '8px' : '16px')};
    right: 0px;
    width: ${({ open }) => (open ? '100%' : '50%')};
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
  }

  :before {
    top: ${({ open }) => (open ? '8px' : '8px')};
    left: 0px;
    width: 100%;
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0deg)')};
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${Colors.GRAYS_WITHE};
  height: 100vh;
  width: 100%;
  padding: 24px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(64px);

  @media screen and (min-width: 768px) {
    transform: translateY(72px);
  }

  @media screen and (min-width: 1160px) {
    transform: translateY(88px);
  }

  ul {
    list-style: none;

    li {
      transition-delay: 0.3s;
      margin-top: 24px;

      &:hover {
        color: ${Colors.PRIMARY};
      }

      &:first-child {
        margin-top: 0;
      }
    }
  }
`;

export const ToogleText = styled(Text)`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${Colors.DARKER_RED};
  }
`;

const FadeInAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const FadeIn = styled(BaseAnimation)`
  animation-name: ${FadeInAnimation};
`;
