import { CART_TYPES } from "./cart.types";

export const addToCart = (product, qty) => (dispatch) => {
  dispatch({
    type: CART_TYPES.ADD_TO_CART,
    payload: {
      ...product,
      qty,
    },
  });
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: CART_TYPES.REMOVE_FROM_CART,
    payload: id,
  });
};