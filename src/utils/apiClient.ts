import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL || 'https://join-tsh-api-staging.herokuapp.com';

const api = axios.create({
  baseURL: apiURL,
});

export { api };
