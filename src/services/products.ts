import { useQuery } from 'react-query';
import { api } from 'utils/apiClient';
import { ProductsParams, ProductsResponseData } from './products.types';

const fetchProducts = async (params: ProductsParams = {}): Promise<ProductsResponseData> => {
  const { data } = await api.get('/products', {
    params: { limit: 8, ...params },
  });

  return data;
};

type Options = {
  onSuccess?: (data: ProductsResponseData) => void;
};

export const useProducts = (params: ProductsParams = {}, options: Options = {}) => {
  return useQuery(['products', params], () => fetchProducts(params), {
    keepPreviousData: true,
    ...options,
  });
};
