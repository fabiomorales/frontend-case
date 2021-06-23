import styled from 'styled-components';

type AlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around';
type AlignItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
type AlignSelf =
  | 'auto'
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline';
type Flex = number;
type FlexBasis = 'auto' | string | number;
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type FlexFlow = 'row wrap' | 'row nowrap' | 'column nowrap';
type FlexGrow = number;
type FlexShrink = number;
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around';

export interface FlexProps {
  flex?: Flex;
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  flexBasis?: FlexBasis;
  flexDirection?: FlexDirection;
  flexFlow?: FlexFlow;
  flexGrow?: FlexGrow;
  flexShrink?: FlexShrink;
  flexWrap?: FlexWrap;
  justifyContent?: JustifyContent;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  ${prop => (prop.flex ? `flex: ${prop.flex}` : null)};
  ${prop => (prop.alignContent ? `align-content: ${prop.alignContent}` : null)};
  ${prop => (prop.alignItems ? `align-items:  ${prop.alignItems}` : null)};
  ${prop => (prop.alignSelf ? `align-self:  ${prop.alignSelf}` : null)};
  ${prop => (prop.flexBasis ? `flex-basis:  ${prop.flexBasis}` : null)};
  ${prop =>
    prop.flexDirection
      ? `flex-direction:  ${prop.flexDirection}`
      : 'flex-direction: row'};
  ${prop => (prop.flexFlow ? `flex-flow:  ${prop.flexFlow}` : null)};
  ${prop => (prop.flexGrow ? `flex-grow:  ${prop.flexGrow}` : null)};
  ${prop => (prop.flexShrink ? `flex-shrink:  ${prop.flexShrink}` : null)};
  ${prop => (prop.flexWrap ? `flex-wrap:  ${prop.flexWrap}` : null)};
  ${prop =>
    prop.justifyContent ? `justify-content:  ${prop.justifyContent}` : null};
`;

export default Flex;
