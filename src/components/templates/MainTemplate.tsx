import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';

const SMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const SContent = styled.main`
  flex-grow: 1;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.size.m};

  ${({ theme }) => theme.mq.desktop} {
    padding: ${({ theme: { size } }) => `${size.xxxl} ${size.m}`};
  }
`;

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
