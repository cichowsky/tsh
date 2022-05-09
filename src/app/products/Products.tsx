import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate';
import SearchForm from 'components/SearchForm/SearchForm';
import ProductCard, { ProductCardList } from 'components/Product/ProductCard';
import ProductEmpty from 'components/Product/ProductEmpty';
import Pagination from 'components/Pagination/Pagination';
import { Spinner } from 'components/UI';
import { useProducts, productsParamsFromURL, productsParamsToURL } from 'services/products';
import { Product, ProductsParams, InputsParams } from 'services/products.types';

export const Products = () => {
  const { search, pathname } = useLocation();
  const history = useHistory();

  const [params, setParams] = useState<ProductsParams>(() => productsParamsFromURL(search));
  const { data, isLoading } = useProducts(params, {
    onSuccess: () => productsParamsToURL(params, history, pathname),
  });

  const handlePageClick = (page: number) => {
    setParams({ ...params, ...{ page } });
  };

  const handleFormData = (formData: InputsParams) => {
    setParams({ ...formData, page: 1 });
  };

  return (
    <MainTemplate
      headerContent={
        <SearchForm onFormSubmit={handleFormData} initialValues={productsParamsFromURL(search)} />
      }
    >
      {isLoading && <Spinner />}

      {data?.items.length === 0 && <ProductEmpty />}

      {data && data.items.length > 0 && (
        <>
          <ProductCardList>
            {data.items.map((product: Product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ProductCardList>

          <Pagination
            activePage={data.meta.currentPage}
            count={data.meta.totalPages}
            onPageChange={handlePageClick}
          />
        </>
      )}
    </MainTemplate>
  );
};
