import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormGroup, Checkbox } from 'components/UI';
import SearchBar from 'components/SearchBar/SearchBar';
import { SSearchForm, SFiltersWrapper } from './SearchForm.styles';

export type Inputs = {
  search: string;
  active: boolean;
  promo: boolean;
};

type SearchFormProps = {
  onFormSubmit: (formData: Partial<Inputs>) => void;
};

const SearchForm = ({ onFormSubmit }: SearchFormProps) => {
  const { register, watch, handleSubmit } = useForm<Inputs>({
    defaultValues: { search: '', active: false, promo: false },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => onFormSubmit(data);

  useEffect(() => {
    const subscription = watch((data, { name }) => {
      if (name === 'active' || name === 'promo') onFormSubmit(data);
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
