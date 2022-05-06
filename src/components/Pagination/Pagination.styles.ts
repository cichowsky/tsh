import styled from 'styled-components';

export const SPagination = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.size.s};

  margin-top: ${({ theme }) => theme.size.l};

  ${({ theme }) => theme.mq.desktop} {
    margin-top: ${({ theme }) => theme.size.xxl};
  }
`;

export const SPages = styled.div`
  display: flex;
`;

export const SButton = styled.button<{ isActive?: boolean }>`
  padding: ${({ theme }) => theme.size.xs};
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

export const SBreak = styled.span`
  padding: ${({ theme }) => theme.size.xs};
  user-select: none;
`;
