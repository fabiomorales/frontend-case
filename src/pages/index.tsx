import { Header } from 'components/molecules';
import { Home as HomePage } from '@organisms/index';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React, { FC } from 'react';

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>
          Cora - Conta Digital feita para empreendedores e donos de negócio
        </title>
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:400,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HomePage />
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home']))
  }
});

export default Home;
