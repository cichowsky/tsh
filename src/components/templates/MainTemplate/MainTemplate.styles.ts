import styled from 'styled-components';

export const SMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const SContent = styled.main`
  flex-grow: 1;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.size.m};

  ${({ theme }) => theme.mq.desktop} {
    padding: ${({ theme: { size } }) => `${size.xxxl} ${size.m}`};
  }
`;
