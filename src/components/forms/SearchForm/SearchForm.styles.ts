import styled from 'styled-components';
import { SSearchBarWrapper } from 'components/SearchBar/SearchBar.styles';

export const SSearchForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.size.m};

  ${SSearchBarWrapper} {
    flex-grow: 1;
    max-width: 39.2rem;
  }
`;

export const SFiltersWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.size.m};
`;
