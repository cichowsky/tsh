import React, { useState, useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { MainTemplate } from 'components/templates';
import { Pagination, SearchForm, ProductList, ProductCard, ProductEmpty } from 'components';
import { Spinner } from 'components/UI';
import { useProducts, useProductsDataLoaded, useProductsPrefetchPage } from 'services/products';
import { Product, ProductsParams, InputsParams } from 'services/products.types';
import { usePageTitle } from 'hooks/usePageTitle';
import { productsParamsFromURL, productsParamsToURL } from './Products.helpers';

export const Products = () => {
  usePageTitle('Join TSH - products');
  const { search, pathname } = useLocation();
  const history = useHistory();

  const [params, setParams] = useState<ProductsParams>(() => productsParamsFromURL(search));

  const { data, isLoading, isFetching, isError } = useProducts(params);

  useProductsDataLoaded(data, () => {
    productsParamsToURL(params, history, pathname);
    window.scrollTo(0, 0);
  });

  useProductsPrefetchPage(data, params);

  const handlePageClick = useCallback(
    (page: number) => setParams({ ...params, ...{ page } }),
    [params]
  );

  const handleFormData = (formData: InputsParams) => setParams({ ...formData, page: 1 });

  return (
    <MainTemplate
      headerContent={<SearchForm onFormSubmit={handleFormData} initialValues={params} />}
    >
      {isError && <p>Something went wrong. Please reload page.</p>}

      {isLoading && <Spinner />}

      {data?.items.length === 0 && <ProductEmpty />}

      {data && data.items.length > 0 && (
        <ProductList isListFetching={isFetching}>
          {data.items.map((product: Product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </ProductList>
      )}

      {data && data.meta.totalPages > 1 && (
        <Pagination
          activePage={data.meta.currentPage}
          count={data.meta.totalPages}
          onPageChange={handlePageClick}
        />
      )}
    </MainTemplate>
  );
};
