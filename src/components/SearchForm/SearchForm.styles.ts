import styled from 'styled-components';
import { Input } from 'components/UI';

export const SSearchForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.size.m};
`;

export const SSearchInput = styled(Input)`
  flex-grow: 1;
  max-width: 39.2rem;
`;

export const SFiltersWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.size.m};
`;
