import React, { ReactNode } from 'react';
import { LogoLink } from 'components';
import {
  SAuthTemplate,
  SImageWrapper,
  SContentWrapper,
  SContent,
  SLogoWrapper,
} from './AuthTemplate.styles';
import heroImage from '../../../assets/images/hero.jpg';

type AuthTemplateProps = {
  children: ReactNode;
};

const AuthTemplate = ({ children }: AuthTemplateProps) => {
  return (
    <SAuthTemplate>
      <SImageWrapper>
        <img src={heroImage} alt="hero" loading="lazy" />
      </SImageWrapper>

      <SContentWrapper>
        <SLogoWrapper>
          <LogoLink />
        </SLogoWrapper>

        <SContent>{children}</SContent>
      </SContentWrapper>
    </SAuthTemplate>
  );
};

export default AuthTemplate;
