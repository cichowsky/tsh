import { RouteComponentProps } from 'react-router-dom';
import { queryStringToObject, objectToQueryString } from 'utils/queryString';
import { ProductsParams } from 'services/products.types';

export const productsParamsFromURL = (queryParamsFromUrl: string): ProductsParams => {
  const { page, active, promo, search } = queryStringToObject(queryParamsFromUrl);

  return {
    ...(search && { search }),
    ...(active === 'true' && { active: true }),
    ...(promo === 'true' && { promo: true }),
    ...(page && !Number.isNaN(parseInt(page, 10)) ? { page: parseInt(page, 10) } : { page: 1 }),
  };
};

type History = RouteComponentProps['history'];

export const productsParamsToURL = (params: ProductsParams, history: History, pathname: string) => {
  const paramsToURL = { ...params };
  if (paramsToURL.page === 1) delete paramsToURL.page;

  history.replace({ pathname, search: objectToQueryString(paramsToURL) });
};
