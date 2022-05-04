import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledContent = styled.main`
  flex-grow: 1;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 2.4rem;

  ${({ theme }) => theme.mq.desktop} {
    padding: 5.6rem 2.4rem;
  }
`;

type MainTemplateProps = {
  children: ReactNode;
  headerContent?: ReactNode;
};

const MainTemplate = ({ children, headerContent = null }: MainTemplateProps) => {
  return (
    <StyledMainTemplate>
      <Header>{headerContent}</Header>
      <StyledContent>{children}</StyledContent>
      {/* <footer>footer</footer> */}
    </StyledMainTemplate>
  );
};

export default MainTemplate;
