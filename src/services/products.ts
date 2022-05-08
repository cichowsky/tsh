import { api } from 'utils/apiClient';
import { useQuery } from 'react-query';
import { ProductsParams, ProductsResponseData } from './products.types';

const fetchProducts = async (params: ProductsParams = {}): Promise<ProductsResponseData> => {
  const { data } = await api.get('/products', {
    params: { limit: 8, ...params },
  });

  return data;
};

export const useProducts = (params: ProductsParams = {}) => {
  return useQuery(['products', params], () => fetchProducts(params), {
    keepPreviousData: true,
  });
};
