import { Link } from 'components/atoms';
import { useTranslation } from 'next-i18next';
import { FC, useState } from 'react';
import * as Styles from './styles';

type ToogleListType = {
  url: string;
  text: string;
};

interface ToogleMenuProps {
  ToogleList: ToogleListType[];
  className: string;
}

const ToogleMenu: FC<ToogleMenuProps> = ({ ToogleList, className }) => {
  const { t } = useTranslation(['common']);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Styles.MenuContainer
        className={className}
        open={openMenu}
        onClick={() => setOpenMenu(!openMenu)}
      />
      {openMenu && (
        <Styles.Menu>
          <Styles.FadeIn duration="0.3s" delay="0.2s">
            <ul>
              {ToogleList.map((item: ToogleListType, index: number) => (
                <li key={index}>
                  <Link href={item.url}>
                    <Styles.ToogleText type="linkRegular" color="GRAYS_BLACK">
                      {t(`${item.text}`)}
                    </Styles.ToogleText>
                  </Link>
                </li>
              ))}
            </ul>
          </Styles.FadeIn>
        </Styles.Menu>
      )}
    </>
  );
};

export default ToogleMenu;
