import styled from 'styled-components';

export const StyledProductEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 60rem;
  height: 34.4rem;
  padding: 4.8rem 2.4rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.containerBg};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
`;

export const StyledIconWrapper = styled.div`
  color: ${({ theme }) => theme.color.iconMuted};
  line-height: 1;
  margin-bottom: 2.2rem;
`;
