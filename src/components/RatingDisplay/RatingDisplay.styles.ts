import styled from 'styled-components';

export const SRatingDisplay = styled.div`
  display: inline-flex;
  flex-shrink: 0;
  gap: ${({ theme }) => theme.size.xs};
  margin: ${({ theme }) => theme.size.s} 0;

  & > img {
    width: ${({ theme }) => theme.size.s};
    height: ${({ theme }) => theme.size.s};
  }
`;
