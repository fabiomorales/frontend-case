import { Container, Flex } from 'components/shared';
import styled from 'styled-components';
import { Colors } from 'styles';

export const Footer = styled.footer`
  background-color: ${Colors.GRAYS_BLACK};

  > div :nth-child(1) {
    padding-top: 120px !important;
  }

  > div :nth-child(2) {
    padding-bottom: 120px !important;
  }
`;

export const FirtContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(12, 1fr);
    align-items: flex-start;
    text-align: start;
  }

  > .firstFooterList {
    margin-bottom: 30px;

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  > .firstFooterList :nth-child(1),
  > .firstFooterList :nth-child(2) {
    @media screen and (min-width: 768px) {
      margin-bottom: 56px;
    }
  }

  .firstFooterList :nth-child(1) {
    grid-column: 2 / 8;

    @media screen and (min-width: 1280px) {
      grid-column: 2 / 4;
    }
  }

  .firstFooterList :nth-child(2) {
    grid-column: 8 / -1;

    @media screen and (min-width: 1280px) {
      grid-column: 4 / 6;
    }
  }

  .firstFooterList :nth-child(3) {
    grid-column: 2 / 8;

    @media screen and (min-width: 1280px) {
      grid-column: 6 / 9;
    }
  }

  .firstFooterList :nth-child(4) {
    grid-column: 8 / -1;

    @media screen and (min-width: 1280px) {
      grid-column: 9 / 12;
    }
  }
`;

export const secondContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(12, 1fr);
    align-items: flex-start;
    text-align: start;
  }

  .appsContainer {
    @media screen and (min-width: 768px) {
      grid-column: 2 / 8;
    }

    @media screen and (min-width: 1280px) {
      grid-column: 2 / 6;
    }
  }

  .secondFooterList {
    @media screen and (min-width: 768px) {
      grid-column: 8 / -1;
    }

    @media screen and (min-width: 1280px) {
      grid-column: 6 / 8;
    }
  }
`;

export const LastContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${Colors.GRAYS_WITHE};

  > div:first-child {
    text-align: center;
    padding-top: 22px !important;
    padding-bottom: 22px !important;
  }

  .iconsContainer {
    a :not(:last-child) {
      margin-right: 24px;
    }
  }

  @media screen and (min-width: 768px) {
    display: grid;
    flex-direction: row;
    grid-column: 1 / -1;
    grid-template-columns: repeat(12, 1fr);

    div:first-child {
      grid-column: 2 / 8;
      align-items: flex-start;
      text-align: start;
    }

    .iconsContainer {
      grid-column: 9 / 12;
      align-items: flex-start;
      text-align: start;
      padding-top: 22px !important;
      padding-bottom: 22px !important;

      a :not(:last-child) {
        margin-right: 24px;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    .iconsContainer {
      a :not(:last-child) {
        margin-right: 50px;
      }
    }
  }
`;
