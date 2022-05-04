import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.containerBg};
`;

export const StyledInner = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 4.8rem 2.4rem 3.2rem;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  max-width: ${({ theme }) => theme.layout.maxWidth};

  ${({ theme }) => theme.mq.tablet} {
    flex-wrap: nowrap;
    padding: 4.8rem 2.4rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    gap: 10.5rem;
  }
`;

export const StyledLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 4rem;
`;

export const StyledLogoWrapper = styled.div`
  flex-shrink: 0;
`;

export const StyledContentWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 100%;

  ${({ theme }) => theme.mq.tablet} {
    flex-basis: auto;
  }
`;

export const StyledActionsWrapper = styled.div`
  flex-shrink: 0;

  ${({ theme }) => theme.mq.tablet} {
    order: 1;
  }
`;
