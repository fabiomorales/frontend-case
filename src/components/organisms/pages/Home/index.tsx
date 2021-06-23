import { Button } from 'components/atoms';
import { Flex, Text } from 'components/shared';
import { HomePageTemplate } from 'components/templates';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React, { FC } from 'react';
import * as Styles from './styles';

const Home: FC = () => {
  const { t } = useTranslation(['common', 'home']);

  return (
    <HomePageTemplate>
      <section>
        <Styles.FirstContainer>
          <Flex className="buttonContainer">
            <Text type="h1InexRegular" color="GRAYS_BLACK">
              {t('home:loremIpsumDolor')}
            </Text>
            <Button>
              <Text type="h3Semibold" color="GRAYS_WITHE">
                {t('common:queroSerCora')}
              </Text>
            </Button>
          </Flex>
          <Flex className="imageContainer">
            <Image
              width={637}
              height={520}
              src={require('assets/images/disassembledPhone.png').default}
              alt="Disassembled Phone"
            />
          </Flex>
        </Styles.FirstContainer>
      </section>
      <section>
        <Styles.SecondContainer>
          <Flex className="textContainer" flexDirection="column">
            <Text type="h1Regular" color="GRAYS_BLACK">
              {t('home:aeneanPretiumVarius')}
            </Text>
            <Text type="h3Semibold" color="PRIMARY">
              {t('home:interdumMalesuadaFames')}
            </Text>
          </Flex>
          <Flex className="imageContainer">
            <Image
              width={166}
              height={166}
              src={require('assets/images/iconLogoCora.svg').default}
              alt="Logo Cora"
            />
          </Flex>
        </Styles.SecondContainer>
      </section>
      <section>
        <Styles.ThirdContainer>
          <Flex
            className="imageContainer"
            flexDirection="column"
            justifyContent="center"
          >
            <Text type="h1InexRegular" color="GRAYS_WITHE">
              {t('home:sedLeoNon')}
            </Text>
            <Text type="h3InexRegular" color="GRAYS_WITHE">
              {t('home:quisRutrumSapien')}
            </Text>
          </Flex>
        </Styles.ThirdContainer>
      </section>
      <section>
        <Styles.FourthContainer>
          <Flex
            className="textContainer"
            flexDirection="column"
            justifyContent="center"
          >
            <Text type="h1Regular" color="GRAYS_BLACK">
              {t('home:vivamusVestibulumTellus')}
            </Text>
            <Text type="h3Regular" color="GRAYS_BLACK">
              {t('home:aeneanPretiumVariusAenean')}
            </Text>
          </Flex>
          <Flex className="imageContainer">
            <Image
              width={533}
              height={391}
              src={require('assets/images/image2.png').default}
              alt="Logo Cora"
            />
          </Flex>
        </Styles.FourthContainer>
      </section>
      <section>
        <Styles.FifthContainer>
          <Flex className="imageContainer">
            <Image
              width={533}
              height={391}
              src={require('assets/images/image3.png').default}
              alt="Logo Cora"
            />
          </Flex>
          <Flex
            className="textContainer"
            flexDirection="column"
            justifyContent="center"
          >
            <Text type="h1Regular" color="GRAYS_BLACK">
              {t('home:utVelLaoreetMagna')}
            </Text>
            <Text type="h3Regular" color="GRAYS_BLACK">
              {t('home:aeneanPretiumVariusAenean')}
            </Text>
          </Flex>
        </Styles.FifthContainer>
      </section>
    </HomePageTemplate>
  );
};

export default Home;
