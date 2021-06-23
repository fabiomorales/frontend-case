import { Icon } from 'components/atoms';
import { FooterImageList, FooterList } from 'components/molecules';
import { Flex, Text } from 'components/shared';
import { Trans, useTranslation } from 'next-i18next';
import React, { FC } from 'react';
import { Colors } from 'styles';
import { FONT_FAMILY_SEMIBOLD } from 'styles/typography';
import {
  appImageList,
  AppImageListType,
  firstFooterList,
  FooterListType,
  iconList,
  IconListType,
  secondFooterList
} from './constants';
import * as Styles from './styles';

const Footer: FC = () => {
  const { t } = useTranslation(['common']);

  return (
    <Styles.Footer className="footer">
      <Styles.FirtContainer>
        {firstFooterList.map((item: FooterListType, index: number) => (
          <FooterList
            className="firstFooterList"
            key={index}
            title={item.title}
            footerList={item.footerList}
          />
        ))}
      </Styles.FirtContainer>
      <Styles.secondContainer>
        {appImageList.map((item: AppImageListType, index: number) => (
          <FooterImageList
            className="appsContainer"
            key={index}
            title={item.title}
            appImageList={item.appImageList}
          />
        ))}
        {secondFooterList.map((item: FooterListType, index: number) => (
          <FooterList
            className="secondFooterList"
            key={index}
            title={item.title}
            footerList={item.footerList}
          />
        ))}
      </Styles.secondContainer>
      <Styles.LastContainer>
        <Flex>
          <Text type="body2Regular" color="GRAYS_BLACK">
            <Trans
              defaults={t('common:coraPagamentosLTDA')}
              components={{
                b: (
                  <strong
                    style={{
                      fontFamily: FONT_FAMILY_SEMIBOLD,
                      color: Colors.PRIMARY
                    }}
                  />
                )
              }}
            />
          </Text>
        </Flex>
        <Flex justifyContent="center" className="iconsContainer">
          {iconList.map((item: IconListType, index: number) => (
            <Icon
              key={index}
              width={32}
              height={32}
              src={item.src}
              alt={item.name}
              href={item.href}
            />
          ))}
        </Flex>
      </Styles.LastContainer>
    </Styles.Footer>
  );
};

export default Footer;
