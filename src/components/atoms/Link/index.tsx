import { LinkProps as LinkPropsNext } from 'next/link';
import { FC } from 'react';
import * as Styles from './styles';

interface LinkPorps extends LinkPropsNext {
  href: string;
}

const Link: FC<LinkPorps> = ({ href, children }) => {
  return (
    <Styles.LinkNext href={href} passHref>
      {children}
    </Styles.LinkNext>
  );
};

export default Link;
