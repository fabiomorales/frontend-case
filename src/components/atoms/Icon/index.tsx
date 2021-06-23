import Image from 'next/image';
import { FC } from 'react';
import * as Styles from './styles';

interface IconPorps {
  width: number;
  height: number;
  href?: string;
  src: string;
  alt: string;
  onClick?: () => void;
}

const Icon: FC<IconPorps> = ({ href, width, height, src, alt, onClick }) => {
  return (
    <Styles.a href={href} onClick={onClick}>
      <Image width={width} height={height} src={src} alt={alt} />
    </Styles.a>
  );
};

export default Icon;
