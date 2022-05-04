import React from 'react';
import { FormGroup, Checkbox } from 'components/UI';
import { StyledSearchForm, StyledInput, StyledFiltersWrapper } from './SearchForm.styles';

const SearchForm = () => {
  return (
    <StyledSearchForm>
      <StyledInput id="search" type="text" placeholder="Search" search />
      <StyledFiltersWrapper>
        <FormGroup>
          <Checkbox id="active" name="active" />
          <label htmlFor="active">Active</label>
        </FormGroup>
        <FormGroup>
          <Checkbox id="promo" name="promo" />
          <label htmlFor="promo">Promo</label>
        </FormGroup>
      </StyledFiltersWrapper>
    </StyledSearchForm>
  );
};

export default SearchForm;
