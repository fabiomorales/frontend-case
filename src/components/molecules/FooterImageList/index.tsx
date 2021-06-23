import { Icon } from 'components/atoms';
import { Flex, Text } from 'components/shared';
import { useTranslation } from 'next-i18next';
import React, { FC } from 'react';
import * as Styles from './styles';

type AppImageType = {
  href: string;
  src: string;
  name: string;
};

interface FooterImagesListProps {
  title: string;
  appImageList: AppImageType[];
  className?: string;
}

const FooterImageList: FC<FooterImagesListProps> = ({
  title,
  appImageList,
  className
}) => {
  const { t } = useTranslation(['common']);

  return (
    <Styles.Flex flexDirection="column" className={className}>
      <Text type="h3Semibold" color="GRAYS_WITHE">
        {t(`${title}`)}
      </Text>
      <Flex flexDirection="row">
        {appImageList.map((item: AppImageType, index: number) => (
          <Icon
            key={index}
            width={155}
            height={50}
            src={item.src}
            alt={item.name}
            href={item.href}
          />
        ))}
      </Flex>
    </Styles.Flex>
  );
};

export default FooterImageList;
