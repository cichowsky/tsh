import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { FormGroup, Checkbox } from 'components/UI';
import SearchBar from 'components/SearchBar/SearchBar';
import { InputsParams, ProductsParams } from 'services/products.types';
import { processData, useLogoClick } from './SearchForm.helpers';
import { SSearchForm, SFiltersWrapper } from './SearchForm.styles';

type SearchFormProps = {
  onFormSubmit: (formData: InputsParams) => void;
  initialValues?: ProductsParams;
};

const defaultValues = { search: '', active: false, promo: false };

const SearchForm = ({ onFormSubmit, initialValues = {} }: SearchFormProps) => {
  const history = useHistory();
  const { page, ...initialFormValues } = initialValues;

  const { register, watch, handleSubmit, reset } = useForm<InputsParams>({
    defaultValues: { ...defaultValues, ...initialFormValues },
  });

  useEffect(() => {
    const subscription = watch((data, { name }) => {
      if (name === 'active' || name === 'promo') onFormSubmit(processData(data));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useLogoClick(history, () => {
    reset(defaultValues);
    onFormSubmit({});
  });

  const onSubmit: SubmitHandler<InputsParams> = (data) => {
    onFormSubmit(processData(data));
  };

  return (
    <SSearchForm onSubmit={handleSubmit(onSubmit)}>
      <SearchBar {...register('search')} placeholder="Search" />
      <SFiltersWrapper>
        <FormGroup>
          <Checkbox {...register('active')} id="active" />
          <label htmlFor="active">Active</label>
        </FormGroup>
        <FormGroup>
          <Checkbox {...register('promo')} id="promo" />
          <label htmlFor="promo">Promo</label>
        </FormGroup>
      </SFiltersWrapper>
    </SSearchForm>
  );
};

export default SearchForm;
