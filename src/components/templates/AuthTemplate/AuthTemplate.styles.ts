import styled from 'styled-components';

export const SAuthTemplate = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.background2};
`;

export const SImageWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    display: block;
    flex-basis: 42%;
    max-width: 60.4rem;
  }

  & > img {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    object-fit: cover;
  }
`;

export const SContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: ${({ theme: { size } }) => `${size.xl} ${size.m}`};

  ${({ theme }) => theme.mq.tablet} {
    padding: ${({ theme: { size } }) => `${size.xxxl} 12.8rem`};
  }
`;

export const SLogoWrapper = styled.div`
  margin-bottom: 10rem;

  ${({ theme }) => theme.mq.desktop} {
    margin-bottom: 0;
  }
`;

export const SContent = styled.main`
  margin-bottom: auto;

  ${({ theme }) => theme.mq.desktop} {
    margin-top: auto;
  }
`;
