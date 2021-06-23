import styled from 'styled-components';

export const TemplateContainer = styled.div`
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
`;

export const Main = styled.main`
  margin-top: 64px;

  @media screen and (min-width: 768px) {
    margin-top: 72px;
  }

  @media screen and (min-width: 1160px) {
    margin-top: 88px;
  }
`;
