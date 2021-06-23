import { Link } from 'components/atoms';
import { Flex, Text } from 'components/shared';
import { useTranslation } from 'next-i18next';
import React, { FC } from 'react';
import * as Styles from './styles';

type FooterType = {
  text: string;
  url: string;
};

interface FooterListProps {
  title: string;
  footerList: FooterType[];
  className?: string;
}

const FooterList: FC<FooterListProps> = ({ title, footerList, className }) => {
  const { t } = useTranslation(['common']);

  return (
    <Styles.Flex flexDirection="column" className={className}>
      <Text type="h3Semibold" color="GRAYS_WITHE">
        {t(`${title}`)}
      </Text>
      <Flex>
        <ul>
          {footerList.map((item: FooterType, index: number) => (
            <li key={index}>
              <Link href={item.url}>
                <Text type="linkRegular" color="GRAY2">
                  {t(`${item.text}`)}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      </Flex>
    </Styles.Flex>
  );
};

export default FooterList;
