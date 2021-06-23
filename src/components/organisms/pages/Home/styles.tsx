import image1 from 'assets/images/image1.png';
import { Container } from 'components/shared';
import styled from 'styled-components';

export const FirstContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #f0f4f8 0%, rgba(240, 244, 248, 0) 100%);

  @media screen and (min-width: 768px) {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(12, 1fr);
    padding: 0px 32px;
  }

  .buttonContainer {
    flex-direction: column;
    padding: 24px 0px 32px !important;

    h1 {
      margin-bottom: 35px;
    }

    @media screen and (min-width: 768px) {
      grid-column: 1 / 7;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      padding: 0px !important;

      button {
        margin-right: auto;
        margin-left: 0;
      }
    }

    @media screen and (min-width: 1280px) {
      grid-column: 2 / 6;
    }
  }

  .imageContainer {
    grid-column: 7 / -1;

    @media screen and (min-width: 768px) {
      padding: 86px 0;
    }
  }
`;

export const SecondContainer = styled(Container)`
  padding-top: 60px !important;
  padding-bottom: 120px !important;

  @media screen and (min-width: 768px) {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(12, 1fr);
  }

  .textContainer {
    > h1 {
      margin-bottom: 24px;
    }

    @media screen and (min-width: 768px) {
      grid-column: 1 / 10;
    }

    @media screen and (min-width: 1280px) {
      grid-column: 2 / 9;
    }
  }

  .imageContainer {
    display: none;

    @media screen and (min-width: 1280px) {
      display: flex;
      justify-content: center;
      grid-column: 10 / 12;
    }
  }
`;

export const ThirdContainer = styled(Container)`
  min-height: 80vh;
  position: relative;
  display: flex;
  align-items: center;

  > div:first-child {
    grid-column: 2 / 11;
  }

  :after {
    background-image: url(${image1});
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: none;
    background-position: center initial;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 1;
    z-index: -10;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(12, 1fr);
    padding: 100px 0px 50px !important;
  }

  @media screen and (min-width: 1280) {
    padding: 250px 0px 200px !important;
  }
`;

export const FourthContainer = styled(Container)`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-top: 90px !important;
  padding-bottom: 30px !important;

  @media screen and (min-width: 768px) {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(12, 1fr);
    padding-bottom: 45px !important;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 120px !important;
    padding-bottom: 60px !important;
  }

  .textContainer {
    grid-column: 1 / 6;

    h1 {
      margin-bottom: 24px;
    }

    @media screen and (min-width: 1024px) {
      grid-column: 2 / 6;
    }
  }

  .imageContainer {
    grid-column: 7 / -1;
    padding-bottom: 30px;

    @media screen and (min-width: 768px) {
      padding: 0;
    }
  }
`;

export const FifthContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px !important;
  padding-bottom: 80px !important;

  @media screen and (min-width: 768px) {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(12, 1fr);
    padding-top: 45px !important;
    padding-bottom: 120px !important;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 45px !important;
    padding-bottom: 160px !important;
  }

  .imageContainer {
    grid-column: 1 / 6;
    padding-bottom: 30px;

    @media screen and (min-width: 768px) {
      padding-bottom: 0;
    }
    @media screen and (min-width: 1024px) {
      grid-column: 2 / 6;
    }
  }

  .textContainer {
    grid-column: 7 / 12;

    h1 {
      margin-bottom: 24px;
    }

    @media screen and (min-width: 768px) {
    }
  }
`;
