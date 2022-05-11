import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { LogoLink } from 'components';
import { Button } from 'components/UI';
import { AppRoute } from 'routing/AppRoute.enum';
import { SHeader, SInner, SLogoWrapper, SActions, SContent } from './Header.styles';

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <SHeader>
      <SInner>
        <SLogoWrapper>
          <LogoLink />
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
