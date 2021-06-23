import { Flex as FlexComponent } from 'components/shared';
import styled from 'styled-components';
import { Colors } from 'styles';

export const Flex = styled(FlexComponent)`
  h3 {
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
  }

  li {
    padding-bottom: 2px;
    line-height: 40px;
  }

  a {
    color: ${Colors.GRAY2};
    cursor: pointer;
    text-decoration: none;

    :hover {
      border-bottom: 2px solid ${Colors.GRAY2};
    }
  }
`;
