// FONT FAMILY
export const FONT_FAMILY_LIGHT = 'Nunito Light';
export const FONT_FAMILY_REGULAR = 'Nunito Regular';
export const FONT_FAMILY_BOLD = 'Nunito Semibold';
export const FONT_FAMILY_SEMIBOLD = 'Nunito Semibold';

type fontWeight =
  | 'normal'
  | 'bold'
  | 'bolder'
  | 'lighter'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR: fontWeight = 400;
export const FONT_WEIGHT_SEMIBOLD: fontWeight = 600;
export const FONT_WEIGHT_BOLD: fontWeight = 800;

// FONT SIZE
export const FONT_SIZE_72 = '72px';
export const FONT_SIZE_40 = '40px';
export const FONT_SIZE_36 = '36px';
export const FONT_SIZE_22 = '22px';
export const FONT_SIZE_16 = '16px';
export const FONT_SIZE_14 = '14px';

// LINE HEIGHT
export const LINE_HEIGHT_80 = '80px';
export const LINE_HEIGHT_48 = '48px';
export const LINE_HEIGHT_32 = '32px';
export const LINE_HEIGHT_24 = '24px';
export const LINE_HEIGHT_20 = '20px';

// WEB DESIGN SYSTEM

export const H1_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
  fontSize: FONT_SIZE_36,
  lineHeight: LINE_HEIGHT_48
};

export const H1_SEMIBOLD = {
  fontFamily: FONT_FAMILY_SEMIBOLD,
  fontWeight: FONT_WEIGHT_SEMIBOLD,
  fontSize: FONT_SIZE_36,
  lineHeight: LINE_HEIGHT_48
};

export const H3_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
  fontSize: FONT_SIZE_22,
  lineHeight: LINE_HEIGHT_32
};

export const H3_SEMIBOLD = {
  fontFamily: FONT_FAMILY_SEMIBOLD,
  fontWeight: FONT_WEIGHT_SEMIBOLD,
  fontSize: FONT_SIZE_22,
  lineHeight: LINE_HEIGHT_32
};

export const BODY1_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
  fontSize: FONT_SIZE_16,
  lineHeight: LINE_HEIGHT_24
};

export const BODY1_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
  fontSize: FONT_SIZE_16,
  lineHeight: LINE_HEIGHT_24
};

export const BODY2_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
  fontSize: FONT_SIZE_14,
  lineHeight: LINE_HEIGHT_20
};

export const BODY2_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
  fontSize: FONT_SIZE_14,
  lineHeight: LINE_HEIGHT_20
};

export const LINK_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
  fontSize: FONT_SIZE_16,
  lineHeight: LINE_HEIGHT_24
};

export const LINK_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
  fontSize: FONT_SIZE_16,
  lineHeight: LINE_HEIGHT_24
};

export const BUTTON_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
  fontSize: FONT_SIZE_16,
  lineHeight: LINE_HEIGHT_24
};

export const BUTTON_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
  fontSize: FONT_SIZE_16,
  lineHeight: LINE_HEIGHT_24
};

// INEXISTING WEB DESIGN SYSTEM

export const H1_INEX_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
  fontSize: FONT_SIZE_72,
  lineHeight: LINE_HEIGHT_80
};

export const H1_INEX_SEMIBOLD = {
  fontFamily: FONT_FAMILY_SEMIBOLD,
  fontWeight: FONT_WEIGHT_SEMIBOLD,
  fontSize: FONT_SIZE_72,
  lineHeight: LINE_HEIGHT_80
};

export const H3_INEX_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
  fontSize: FONT_SIZE_40,
  lineHeight: LINE_HEIGHT_48
};

export const H3_INEX_SEMIBOLD = {
  fontFamily: FONT_FAMILY_SEMIBOLD,
  fontWeight: FONT_WEIGHT_SEMIBOLD,
  fontSize: FONT_SIZE_40,
  lineHeight: LINE_HEIGHT_48
};
