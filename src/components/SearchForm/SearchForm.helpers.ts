import { useEffect } from 'react';
import { InputsParams } from 'services/products.types';

export const processData = (data: InputsParams) => {
  const outputData = { ...data };
  if (outputData.search === '') delete outputData.search;
  if (!outputData.active) delete outputData.active;
  if (!outputData.promo) delete outputData.promo;
  return outputData;
};

// FIXME: type any
export const useLogoClick = (history: any, callback: () => void) => {
  useEffect(() => {
    const { action, location } = history;
    if (action === 'PUSH' && location.state?.logo) callback();
  }, [history.location.state]);
};
