import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import SearchForm from 'components/SearchForm/SearchForm';

export const Products = () => {
  return (
    <MainTemplate headerContent={<SearchForm />}>
      <h2>Products page</h2>
    </MainTemplate>
  );
};
