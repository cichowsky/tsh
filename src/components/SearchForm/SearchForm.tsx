import React from 'react';
import { FormGroup, Checkbox } from 'components/UI';
import { SSearchForm, SSearchInput, SFiltersWrapper } from './SearchForm.styles';

const SearchForm = () => {
  return (
    <SSearchForm>
      <SSearchInput id="search" type="text" placeholder="Search" search />
      <SFiltersWrapper>
        <FormGroup>
          <Checkbox id="active" name="active" />
          <label htmlFor="active">Active</label>
        </FormGroup>
        <FormGroup>
          <Checkbox id="promo" name="promo" />
          <label htmlFor="promo">Promo</label>
        </FormGroup>
      </SFiltersWrapper>
    </SSearchForm>
  );
};

export default SearchForm;
