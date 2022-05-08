import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormGroup, Checkbox } from 'components/UI';
import SearchBar from 'components/SearchBar/SearchBar';
import { InputsParams } from 'services/products.types';
import { SSearchForm, SFiltersWrapper } from './SearchForm.styles';

type SearchFormProps = {
  onFormSubmit: (formData: InputsParams) => void;
};

const SearchForm = ({ onFormSubmit }: SearchFormProps) => {
  const { register, watch, handleSubmit } = useForm<InputsParams>({
    defaultValues: { search: '', active: false, promo: false },
  });

  const processData = (data: InputsParams) => {
    const outputData = { ...data };
    if (outputData.search === '') delete outputData.search;
    if (!outputData.active) delete outputData.active;
    if (!outputData.promo) delete outputData.promo;
    return outputData;
  };

  const onSubmit: SubmitHandler<InputsParams> = (data) => {
    onFormSubmit(processData(data));
  };

  useEffect(() => {
    const subscription = watch((data, { name }) => {
      if (name === 'active' || name === 'promo') onFormSubmit(processData(data));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

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
