import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 49.6rem;
`;

export const SFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  margin-bottom: ${({ theme }) => theme.size.xxxl};
`;

export const SLink = styled(Link)`
  margin-top: ${({ theme }) => theme.size.s};
  color: ${({ theme }) => theme.color.muted};
`;
