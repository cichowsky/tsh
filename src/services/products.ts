import { useQuery } from 'react-query';
import { RouteComponentProps } from 'react-router-dom';
import { api } from 'utils/apiClient';
import { queryStringToObject, objectToQueryString } from 'utils/queryString';
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

// URL query params handling
export const productsParamsFromURL = (queryParamsFromUrl: string): ProductsParams => {
  const { page, active, promo, search } = queryStringToObject(queryParamsFromUrl);

  return {
    ...(page && !Number.isNaN(parseInt(page, 10)) ? { page: parseInt(page, 10) } : { page: 1 }),
    ...(search && { search }),
    ...(active === 'true' && { active: true }),
    ...(promo === 'true' && { promo: true }),
  };
};

type History = RouteComponentProps['history'];

export const productsParamsToURL = (params: ProductsParams, history: History, pathname: string) => {
  const paramsToURL = { ...params };
  if (paramsToURL.page === 1) delete paramsToURL.page;

  history.replace({ pathname, search: objectToQueryString(paramsToURL) });
};
