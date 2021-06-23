import { Button, Icon, Link } from 'components/atoms';
import { NavBar, ToogleMenu } from 'components/molecules';
import { Container, Text } from 'components/shared';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useScreenClass } from 'react-grid-system';
import { navList } from './constants/navList';
import * as Styles from './styles';

const Header: FC = () => {
  const { t } = useTranslation(['common']);
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  const screenClass = useScreenClass();
  const showNav = ['sm', 'xs', 'md', 'lg'].includes(screenClass);
  const showButtons = ['xs'].includes(screenClass);

  return (
    <Styles.Header className="header">
      <Container>
        <Styles.Flex justifyContent="flex-start" alignItems="center">
          <Icon
            width={90}
            height={24}
            src={require('assets/images/logo.svg').default}
            alt="logo"
            href="/"
            onClick={handleClick}
          />
          <NavBar navList={navList} />

          <Styles.ButtonContainer justifyContent="center" alignItems="center">
            {!showButtons && (
              <>
                <Link href="/">
                  <Styles.LoginText type="linkRegular" color="GRAYS_BLACK">
                    {t('common:login')}
                  </Styles.LoginText>
                </Link>
                <Button onClick={handleClick}>
                  <Text type="buttonBold" color="GRAYS_WITHE">
                    {t('common:queroSerCora')}
                  </Text>
                </Button>
              </>
            )}
            {showNav && (
              <ToogleMenu className="toogleMenu" ToogleList={navList} />
            )}
          </Styles.ButtonContainer>
        </Styles.Flex>
      </Container>
    </Styles.Header>
  );
};

export default Header;
