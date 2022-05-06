import styled from 'styled-components';

export const SImage = styled.img`
  display: block;
  object-fit: cover;
  height: 35.4rem;
  width: 100%;
`;

export const SContent = styled.div`
  padding: ${({ theme }) => theme.size.m};

  ${({ theme }) => theme.mq.tablet} {
    padding: ${({ theme: { size } }) => `${size.m} ${size.l} ${size.xxxl}`};
  } ;
`;
