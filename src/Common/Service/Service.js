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

function signIn (body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);
  return promise;
}

function signUp (body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

function getProducts () {
  const request = axios.get(`${BASE_URL}/products`);
  return request;
}

function searchProducts(query) {
  const request = axios.get(`${BASE_URL}/products?keyword=${query}`);
  return request;
}

function getCartProducts() {
  const config = createHeaders()
  const request = axios.get(`${BASE_URL}/cart`, config);
  return request;
}

function addToCart(body) {
  const config = createHeaders()
  const request = axios.post(`${BASE_URL}/cart`, body, config);
  return request;
}

function deleteFromCart(param) {
  const config = createHeaders()
  const request = axios.delete(`${BASE_URL}/cart/${param}`, config);
  return request;
}

function checkOutCart() {
  const config = createHeaders()
  const request = axios.delete(`${BASE_URL}/cart`, config);
  return request;
}

function logout() {
  const config = createHeaders();
  const request = axios.delete(`${BASE_URL}/logout`, config);
  return request;
}


export { 
  signIn, 
  signUp, 
  getProducts,
  searchProducts,
  getCartProducts, 
  addToCart, 
  deleteFromCart, 
  checkOutCart, 
  logout 
};

