export const queryStringToObject = (queryString: string) => {
  return Object.fromEntries(new URLSearchParams(queryString));
};

export const objectToQueryString = (object: Record<string, string | number | boolean>): string => {
  return Object.keys(object)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`)
    .join('&');
};
