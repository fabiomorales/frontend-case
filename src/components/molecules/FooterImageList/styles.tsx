import { Flex as FlexComponent } from 'components/shared';
import styled from 'styled-components';

export const Flex = styled(FlexComponent)`
  margin-bottom: 30px;

  h3 {
    margin-bottom: 24px;
  }

  > div {
    flex-direction: column;
  }

  a {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;

    a :not(:last-child) {
      margin-right: 30px;
    }

    > div {
      flex-direction: row;
    }
  }
`;
