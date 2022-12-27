import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

const initialState = [];

export const cartData = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      const remainingItems = state.filter((item) => item.id !== action.payload);
      return [...remainingItems];
    case EMPTY_CART:
      return initialState;
    default:
      return state;
  }
};
