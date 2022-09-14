import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

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

