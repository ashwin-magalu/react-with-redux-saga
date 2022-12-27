import { PRODUCT_LIST, SEARCH_PRODUCT } from "./constant";

// both of these actions call saga function
export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};

export const productSearch = (query) => {
  return {
    type: SEARCH_PRODUCT,
    query,
  };
};
