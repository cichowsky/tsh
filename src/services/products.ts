import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { api } from 'utils/apiClient';
import { queryClient } from 'providers/AppProviders';
import { ITEMS_PER_PAGE } from 'app/config';
import { ProductsParams, ProductsResponseData, ProductsData } from './products.types';

const fetchProducts = async (params: ProductsParams = {}): Promise<ProductsResponseData> => {
  const { data } = await api.get('/products', {
    params: { limit: ITEMS_PER_PAGE, ...params },
  });

  return data;
};

type Options = {
  onSuccess?: (data: ProductsResponseData) => void;
};

export const useProducts = (params: ProductsParams = {}, options: Options = {}) => {
  return useQuery(['products', params], () => fetchProducts(params), {
    keepPreviousData: true,
    staleTime: 60000, // in this case it could be Infinity (backend data doesn't change)
    ...options,
  });
};

// onSuccess option from useQuery is tied to data fetching
// to perform side effects whenever data changes (is sourced from cache) - useEffect is best approach
export const useProductsDataLoaded = (data: ProductsData, callback: () => void) => {
  useEffect(() => {
    if (data?.items) callback();
  }, [data?.items]);
};

export const useProductsPrefetchPage = (data: ProductsData, params: ProductsParams) => {
  useEffect(() => {
    if (data?.meta && data.meta.currentPage < data.meta.totalPages) {
      const paramsNext = { ...params, page: data.meta.currentPage + 1 };
      queryClient.prefetchQuery(['products', paramsNext], () => fetchProducts(paramsNext));
    }
  }, [data?.meta]);
};
