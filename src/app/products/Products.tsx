import React, { useEffect, useState } from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import SearchForm from 'components/SearchForm/SearchForm';
import ProductCard, { ProductCardProps, ProductCardList } from 'components/ProductCard/ProductCard';
import { Spinner } from 'components/UI';

export const Products = () => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://join-tsh-api-staging.herokuapp.com/products?limit=12')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.items);
        setIsLoading(false);
      });
  }, []);

  return (
    <MainTemplate headerContent={<SearchForm />}>
      {isLoading ? (
        <Spinner />
      ) : (
        <ProductCardList>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </ProductCardList>
      )}
    </MainTemplate>
  );
};
