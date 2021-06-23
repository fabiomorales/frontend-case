import { createGlobalStyle } from 'styled-components';
import { FONT_FAMILY_REGULAR } from 'styles/typography';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  *::after, *::before {
    box-sizing: border-box;
  }

  body {
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: ${FONT_FAMILY_REGULAR};
  }
`;
