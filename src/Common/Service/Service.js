import axios from 'axios';

const BASE_URL = 'https://lights-on-back.herokuapp.com';

function createHeaders() {

  const auth = JSON.parse(localStorage.getItem("lightson"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`
    }
  };

  return config;
}

function getProducts () {
  const request = axios.get(`${BASE_URL}/products`);
  return request;
}

export { getProducts };

