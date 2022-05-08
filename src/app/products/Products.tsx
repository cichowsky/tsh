import React, { useState } from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import SearchForm from 'components/SearchForm/SearchForm';
import ProductCard, { ProductCardList } from 'components/Product/ProductCard';
import ProductEmpty from 'components/Product/ProductEmpty';
import Pagination from 'components/Pagination/Pagination';
import { Spinner } from 'components/UI';
import { useProducts } from 'services/products';
import { Product, ProductsParams, InputsParams } from 'services/products.types';

export const Products = () => {
  const [params, setParams] = useState<ProductsParams>({ page: 1 });
  const { data, isLoading } = useProducts(params);

  const handlePageClick = (page: number) => {
    setParams({ ...params, ...{ page } });
  };

  const handleFormData = (formData: InputsParams) => {
    setParams({ page: 1, ...formData });
  };

  return (
    <MainTemplate headerContent={<SearchForm onFormSubmit={handleFormData} />}>
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
