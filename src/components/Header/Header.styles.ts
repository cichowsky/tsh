import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SHeader = styled.header`
  background-color: ${({ theme }) => theme.color.containerBg};
`;

export const SInner = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme: { size } }) => `${size.xxl} ${size.m} ${size.l}`};
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  max-width: ${({ theme }) => theme.layout.maxWidth};

  ${({ theme }) => theme.mq.tablet} {
    flex-wrap: nowrap;
    padding: ${({ theme: { size } }) => `${size.xxl} ${size.m}`};
  }

  ${({ theme }) => theme.mq.desktop} {
    gap: 10.5rem;
  }
`;

export const SLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.size.xl};
`;

export const SLogoWrapper = styled.div`
  flex-shrink: 0;
`;

export const SContentWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 100%;

  ${({ theme }) => theme.mq.tablet} {
    flex-basis: auto;
  }
`;

export const SActionsWrapper = styled.div`
  flex-shrink: 0;

  ${({ theme }) => theme.mq.tablet} {
    order: 1;
  }
`;
