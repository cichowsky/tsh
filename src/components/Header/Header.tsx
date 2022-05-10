import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/UI';
import { ReactComponent as LogoSVG } from 'assets/icons/logo.svg';
import { AppRoute } from 'routing/AppRoute.enum';
import { SHeader, SInner, SLogoWrapper, SLogoLink, SActions, SContent } from './Header.styles';

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <SHeader>
      <SInner>
        <SLogoWrapper>
          <SLogoLink to={{ pathname: AppRoute.Home, state: { logo: true } }}>
            <LogoSVG />
          </SLogoLink>
        </SLogoWrapper>

        <SActions>
          <Button $ghost as={Link} to={AppRoute.Login}>
            Log in
          </Button>
        </SActions>

        <SContent>{children}</SContent>
      </SInner>
    </SHeader>
  );
};

export default Header;
