import { SET_PRODUCT_LIST } from "./constant";

// reducer function is called from saga
export const productData = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return [...action.payload];
    default:
      return state;
  }
};
