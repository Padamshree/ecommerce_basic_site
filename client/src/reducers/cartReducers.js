import { CART_TYPES } from "../actions/cart.types";

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_TYPES.ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cart.find((x) => x.id === item.id);

      if (existItem) {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.id === existItem.id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, item],
        };
      }
    case CART_TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload),
      };
    default:
      return state;
  }
};
