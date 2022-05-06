import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/UI';
import { AppRoute } from 'routing/AppRoute.enum';
import { ReactComponent as LogoSVG } from 'assets/icons/logo.svg';
import {
  SHeader,
  SInner,
  SLogoWrapper,
  SLogoLink,
  SActionsWrapper,
  SContentWrapper,
} from './Header.styles';

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <SHeader>
      <SInner>
        <SLogoWrapper>
          <SLogoLink to={AppRoute.Home}>
            <LogoSVG />
          </SLogoLink>
        </SLogoWrapper>

        <SActionsWrapper>
          <Button ghost as={Link} to={AppRoute.Login}>
            Log in
          </Button>
        </SActionsWrapper>

        <SContentWrapper>{children}</SContentWrapper>
      </SInner>
    </SHeader>
  );
};

export default Header;
