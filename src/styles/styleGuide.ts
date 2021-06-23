import {
  H1_REGULAR,
  H1_SEMIBOLD,
  H3_REGULAR,
  H3_SEMIBOLD,
  BODY1_REGULAR,
  BODY1_BOLD,
  BODY2_REGULAR,
  BODY2_BOLD,
  LINK_REGULAR,
  LINK_BOLD,
  BUTTON_BOLD,
  BUTTON_REGULAR,
  // INEXISTING WEB DESIGN SYSTEM
  H1_INEX_REGULAR,
  H1_INEX_SEMIBOLD,
  H3_INEX_REGULAR,
  H3_INEX_SEMIBOLD
} from './typography';

export enum Typography {
  H1_REGULAR = 'h1Regular',
  H1_SEMIBOLD = 'h1Semibold',
  H3_REGULAR = 'h3Regular',
  H3_SEMIBOLD = 'h3Semibold',
  BODY1_REGULAR = 'body1Regular',
  BODY1_BOLD = 'body1Bold',
  BODY2_REGULAR = 'body2Regular',
  BODY2_BOLD = 'body2Bold',
  LINK_REGULAR = 'linkRegular',
  LINK_BOLD = 'linkBold',
  BUTTON_BOLD = 'buttonBold',
  BUTTON_REGULAR = 'buttonRegular',
  // INEXISTING WEB DESIGN SYSTEM
  H1_INEX_REGULAR = 'h1InexRegular',
  H1_INEX_SEMIBOLD = 'h1InexSemibold',
  H3_INEX_REGULAR = 'h3InexRegular',
  H3_INEX_SEMIBOLD = 'h3InexSemibold'
}

const StyleGuide = {
  typography: {
    h1Regular: {
      fontSize: H1_REGULAR.fontSize,
      lineHeight: H1_REGULAR.lineHeight,
      fontFamily: H1_REGULAR.fontFamily,
      fontWeight: H1_REGULAR.fontWeight
    },
    h1Semibold: {
      fontSize: H1_SEMIBOLD.fontSize,
      lineHeight: H1_SEMIBOLD.lineHeight,
      fontFamily: H1_SEMIBOLD.fontFamily,
      fontWeight: H1_SEMIBOLD.fontWeight
    },
    h3Regular: {
      fontSize: H3_REGULAR.fontSize,
      lineHeight: H3_REGULAR.lineHeight,
      fontFamily: H3_REGULAR.fontFamily,
      fontWeight: H3_REGULAR.fontWeight
    },
    h3Semibold: {
      fontSize: H3_SEMIBOLD.fontSize,
      lineHeight: H3_SEMIBOLD.lineHeight,
      fontFamily: H3_SEMIBOLD.fontFamily,
      fontWeight: H3_SEMIBOLD.fontWeight
    },
    body1Regular: {
      fontSize: BODY1_REGULAR.fontSize,
      lineHeight: BODY1_REGULAR.lineHeight,
      fontFamily: BODY1_REGULAR.fontFamily,
      fontWeight: BODY1_REGULAR.fontWeight
    },
    body1Bold: {
      fontSize: BODY1_BOLD.fontSize,
      lineHeight: BODY1_BOLD.lineHeight,
      fontFamily: BODY1_BOLD.fontFamily,
      fontWeight: BODY1_BOLD.fontWeight
    },
    body2Regular: {
      fontSize: BODY2_REGULAR.fontSize,
      lineHeight: BODY2_REGULAR.lineHeight,
      fontFamily: BODY2_REGULAR.fontFamily,
      fontWeight: BODY2_REGULAR.fontWeight
    },
    body2Bold: {
      fontSize: BODY2_BOLD.fontSize,
      lineHeight: BODY2_BOLD.lineHeight,
      fontFamily: BODY2_BOLD.fontFamily,
      fontWeight: BODY2_BOLD.fontWeight
    },
    linkRegular: {
      fontSize: LINK_REGULAR.fontSize,
      lineHeight: LINK_REGULAR.lineHeight,
      fontFamily: LINK_REGULAR.fontFamily,
      fontWeight: LINK_REGULAR.fontWeight
    },
    linkBold: {
      fontSize: LINK_BOLD.fontSize,
      lineHeight: LINK_BOLD.lineHeight,
      fontFamily: LINK_BOLD.fontFamily,
      fontWeight: LINK_BOLD.fontWeight
    },
    buttonRegular: {
      fontSize: BUTTON_REGULAR.fontSize,
      lineHeight: BUTTON_REGULAR.lineHeight,
      fontFamily: BUTTON_REGULAR.fontFamily,
      fontWeight: BUTTON_REGULAR.fontWeight
    },
    buttonBold: {
      fontSize: BUTTON_BOLD.fontSize,
      lineHeight: BUTTON_BOLD.lineHeight,
      fontFamily: BUTTON_BOLD.fontFamily,
      fontWeight: BUTTON_BOLD.fontWeight
    },
    // INEXISTING WEB DESIGN SYSTEM
    h1InexRegular: {
      fontSize: H1_INEX_REGULAR.fontSize,
      lineHeight: H1_INEX_REGULAR.lineHeight,
      fontFamily: H1_INEX_REGULAR.fontFamily,
      fontWeight: H1_INEX_REGULAR.fontWeight
    },
    h1InexSemibold: {
      fontSize: H1_INEX_SEMIBOLD.fontSize,
      lineHeight: H1_INEX_SEMIBOLD.lineHeight,
      fontFamily: H1_INEX_SEMIBOLD.fontFamily,
      fontWeight: H1_INEX_SEMIBOLD.fontWeight
    },
    h3InexRegular: {
      fontSize: H3_INEX_REGULAR.fontSize,
      lineHeight: H3_INEX_REGULAR.lineHeight,
      fontFamily: H3_INEX_REGULAR.fontFamily,
      fontWeight: H3_INEX_REGULAR.fontWeight
    },
    h3InexSemibold: {
      fontSize: H3_INEX_SEMIBOLD.fontSize,
      lineHeight: H3_INEX_SEMIBOLD.lineHeight,
      fontFamily: H3_INEX_SEMIBOLD.fontFamily,
      fontWeight: H3_INEX_SEMIBOLD.fontWeight
    }
  }
};

export const tags: { [key: string]: keyof JSX.IntrinsicElements } = {
  h1Regular: 'h1',
  h1Semibold: 'h1',
  h3Regular: 'h3',
  h3Semibold: 'h3',
  body1Regular: 'p',
  body1Bold: 'p',
  body2Regular: 'p',
  body2Bold: 'p',
  linkRegular: 'a',
  linkBold: 'a',
  buttonRegular: 'label',
  buttonBold: 'label',
  // INEXISTING WEB DESIGN SYSTEM
  h1InexRegular: 'h1',
  h1InexSemibold: 'h1',
  h3InexRegular: 'h3',
  h3InexSemibold: 'h3'
};

export default StyleGuide;
