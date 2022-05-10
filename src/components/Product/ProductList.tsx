import React, { ReactNode } from 'react';
import { Spinner } from 'components/UI';
import { SProductList } from './ProductList.styles';

type ProductListProps = {
  isListFetching?: boolean;
  children: ReactNode;
};

const ProductList = ({ isListFetching = false, children }: ProductListProps) => {
  return (
    <SProductList isListFetching={isListFetching}>
      {isListFetching && <Spinner />}
      {children}
    </SProductList>
  );
};

export default ProductList;
