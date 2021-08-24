import { PRODUCT_TYPES } from "./product.types";
import axios from "axios";

export const toggleLoader = (toggleState) => ({
  type: PRODUCT_TYPES.TOGGLE_LOADER,
  payload: toggleState,
});

export const removeProductDetails = () =>  ({
  type: PRODUCT_TYPES.RESET_PRODUCT_DETAILS,
  payload: null,
});

export const getProductList = () => (dispatch) => {

  toggleLoader(true);
  axios('/api/products')
  .then(res => {
    const { data } = res;
    if (data.success) {
      dispatch({
        type: PRODUCT_TYPES.GET_PRODUCTS,
        payload: data.products,
      });
    }
  }).catch(() => null)
};

export const getProductDetails = (prodId) => (dispatch) => {

  removeProductDetails();
  axios(`/api/products/get_product?id=${prodId}`)
    .then(res => {
      const { data } = res;
    if (data.success) {
      dispatch({
        type: PRODUCT_TYPES.GET_PRODUCT_DETAILS,
        payload: data.product,
      });
    }
  }).catch(() => null)
};


