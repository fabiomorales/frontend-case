import { Header, Footer } from 'components/organisms';
import React, { FC } from 'react';
import * as Styled from './styles';

const HomePageTemplate: FC = ({ children }) => {
  return (
    <Styled.TemplateContainer>
      <Header />
      <Styled.Main>{children}</Styled.Main>
      <Footer />
    </Styled.TemplateContainer>
  );
};

export default HomePageTemplate;
