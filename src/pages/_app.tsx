import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import React, { FC } from 'react';
import { setConfiguration } from 'react-grid-system';
import GlobalStyle from '../styles/global';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  setConfiguration({
    gridColumns: 12,
    gutterWidth: 24,
    breakpoints: [576, 768, 992, 1160, 1920],
    containerWidths: [768, 992, 1280, 1920],
    maxScreenClass: 'xl'
  });

  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default appWithTranslation(MyApp);
