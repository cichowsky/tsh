import React from 'react';
import { ReactComponent as LogoSVG } from 'assets/icons/logo.svg';
import { AppRoute } from 'routing/AppRoute.enum';
import { SLogoLink } from './LogoLink.styles';

const LogoLink = () => {
  return (
    <SLogoLink to={{ pathname: AppRoute.Home, state: { logo: true } }}>
      <LogoSVG />
    </SLogoLink>
  );
};

export default LogoLink;
