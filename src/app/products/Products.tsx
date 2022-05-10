import React, { useState, useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate';
import SearchForm from 'components/SearchForm/SearchForm';
import ProductCard from 'components/Product/ProductCard';
import ProductList from 'components/Product/ProductList';
import ProductEmpty from 'components/Product/ProductEmpty';
import Pagination from 'components/Pagination/Pagination';
import { Spinner } from 'components/UI';
import { useProducts, useProductsDataLoaded } from 'services/products';
import { Product, ProductsParams, InputsParams } from 'services/products.types';
import { productsParamsFromURL, productsParamsToURL } from './Products.helpers';

export const Products = () => {
  const { search, pathname } = useLocation();
  const history = useHistory();

  const [params, setParams] = useState<ProductsParams>(() => productsParamsFromURL(search));

  const { data, isLoading, isFetching } = useProducts(params);

  useProductsDataLoaded(data, () => {
    productsParamsToURL(params, history, pathname);
    window.scrollTo(0, 0);
  });

  const handlePageClick = useCallback(
    (page: number) => setParams({ ...params, ...{ page } }),
    [params]
  );

  const handleFormData = (formData: InputsParams) => setParams({ ...formData, page: 1 });

  return (
    <MainTemplate
      headerContent={<SearchForm onFormSubmit={handleFormData} initialValues={params} />}
    >
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
