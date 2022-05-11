import React, { ReactNode } from 'react';
import { Header } from 'components';
import { SMainTemplate, SContent } from './MainTemplate.styles';

type MainTemplateProps = {
  children: ReactNode;
  headerContent?: ReactNode;
};

const MainTemplate = ({ children, headerContent = null }: MainTemplateProps) => {
  return (
    <SMainTemplate>
      <Header>{headerContent}</Header>
      <SContent>{children}</SContent>
      {/* <footer>footer</footer> */}
    </SMainTemplate>
  );
};

export default MainTemplate;
