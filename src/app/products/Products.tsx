import React, { useEffect, useState } from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import SearchForm from 'components/SearchForm/SearchForm';
import ProductCard, { ProductCardList } from 'components/Product/ProductCard';
import ProductEmpty from 'components/Product/ProductEmpty';
import Pagination from 'components/Pagination/Pagination';
import { Spinner } from 'components/UI';
import { Product } from 'components/Product/Product.type';

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [pageCount, setPageCount] = useState(10); // initial count from request

  useEffect(() => {
    fetch('https://join-tsh-api-staging.herokuapp.com/products?limit=8')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.items);
        setIsLoading(false);
      });
  }, []);

  const handlePageClick = (page: number) => {
    console.log('clicked page', page); // trigger request -> new page
  };

  return (
    <MainTemplate headerContent={<SearchForm />}>
      {isLoading && <Spinner />}

      {!isLoading && products.length === 0 && <ProductEmpty />}

      {!isLoading && products.length > 0 && (
        <>
          <ProductCardList>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ProductCardList>

          <Pagination activePage={1} count={pageCount} onPageChange={handlePageClick} />
        </>
      )}
    </MainTemplate>
  );
};
