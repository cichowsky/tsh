import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;

  margin-top: 3.2rem;

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 4.8rem;
  }
`;

export const StyledPages = styled.div`
  display: flex;
`;

export const StyledButton = styled.button<{ isActive?: boolean }>`
  padding: 0.8rem;
  background-color: transparent;
  border: none;

  color: ${({ theme, isActive }) => isActive && theme.color.primary};

  &:hover,
  &:focus {
    color: ${({ theme, isActive }) => !isActive && theme.color.primaryStrong};
  }

  &[disabled] {
    color: ${({ theme }) => theme.color.muted};
  }
`;

export const StyledBreak = styled.span`
  padding: 0.8rem;
  user-select: none;
`;
