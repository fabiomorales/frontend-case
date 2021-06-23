import { Container as StyledContainer } from 'react-grid-system';
import styled from 'styled-components';

export const Container = styled(StyledContainer)`
  max-width: 1920px;
  padding: 0 24px !important;
  margin: 0 auto !important;
  box-sizing: border-box;
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }

  @media screen and (min-width: 768px) {
    padding: 0px 32px !important;
  }
  @media screen and (min-width: 1280px) {
    padding: 0px 64px !important;
  }
`;
