import { Link } from 'components/atoms';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import * as Styles from './styles';

type NavType = {
  url: string;
  text: string;
};

interface NavBarProps {
  navList: NavType[];
}

const NavBar: FC<NavBarProps> = ({ navList }) => {
  const { t } = useTranslation(['common']);

  return (
    <nav className="navBar">
      <Styles.Ul>
        {navList.map((item: NavType, index: number) => (
          <li key={index}>
            <Link href={item.url}>
              <Styles.NavText type="linkRegular" color="GRAYS_BLACK">
                {t(`${item.text}`)}
              </Styles.NavText>
            </Link>
          </li>
        ))}
      </Styles.Ul>
    </nav>
  );
};

export default NavBar;
