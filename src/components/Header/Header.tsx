import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/UI';
import { AppRoute } from 'routing/AppRoute.enum';
import { ReactComponent as LogoSVG } from 'assets/icons/logo.svg';
import {
  StyledHeader,
  StyledInner,
  StyledLogoWrapper,
  StyledLogoLink,
  StyledActionsWrapper,
  StyledContentWrapper,
} from './Header.styles';

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledInner>
        <StyledLogoWrapper>
          <StyledLogoLink to={AppRoute.Home}>
            <LogoSVG />
          </StyledLogoLink>
        </StyledLogoWrapper>

        <StyledActionsWrapper>
          <Button ghost as={Link} to={AppRoute.Login}>
            Log in
          </Button>
        </StyledActionsWrapper>

        <StyledContentWrapper>{children}</StyledContentWrapper>
      </StyledInner>
    </StyledHeader>
  );
};

export default Header;
