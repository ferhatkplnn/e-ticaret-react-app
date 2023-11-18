import axios from "axios";

const setAuthorizationHeader = (config) => {
  const { origin } = new URL(config.url);
  const allowedEndpoints = [process.env.REACT_APP_BASE_ENDPOINT];
  const token = localStorage.getItem("access-token");

  config.headers = config.headers || {};

  if (token && allowedEndpoints.includes(origin)) {
    config.headers.Authorization = token;
  }

  return config;
};

const requestInterceptorErrorHandler = (error) => {
  console.error("Request interceptor error:", error);
  return Promise.reject(error);
};

axios.interceptors.request.use(
  setAuthorizationHeader,
  requestInterceptorErrorHandler
);

export const fetchProductList = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/product?page=+${pageParam}`
  );

  return data;
};

export const fetchProduct = async (product_id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/product/${product_id}`
  );

  return data;
};

export const fetchRegister = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/auth/register`,
    input
  );

  return data;
};

export const fetchUserData = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/auth/me`
  );

  return data;
};

export const fetchLogout = async () => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/auth/logout`,
    {
      refresh_token: localStorage.getItem("refresh-token"),
    }
  );
  return data;
};

export const fetchLogin = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/auth/login`,
    input
  );
  return data;
};

export const postOrder = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/order`,
    input
  );

  return data;
};
