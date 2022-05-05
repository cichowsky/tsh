import styled from 'styled-components';

export const StyledImage = styled.img`
  display: block;
  object-fit: cover;
  height: 35.4rem;
  width: 100%;
`;

export const StyledContent = styled.div`
  padding: 2.4rem;

  ${({ theme }) => theme.mq.tablet} {
    padding: 2.4rem 3.2rem 5.6rem;
  } ;
`;
