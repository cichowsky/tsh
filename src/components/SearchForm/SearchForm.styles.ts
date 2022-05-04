import styled from 'styled-components';
import { Input } from 'components/UI';

export const StyledSearchForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
`;

export const StyledInput = styled(Input)`
  flex-grow: 1;
  max-width: 39.2rem;
`;

export const StyledFiltersWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
`;
