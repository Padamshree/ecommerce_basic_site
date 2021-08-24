import { PRODUCT_TYPES } from "../actions/product.types";

const initialState = {
  productList: [],
  productDetails: {},
  loading: true,
}

export const getProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_TYPES.GET_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case PRODUCT_TYPES.GET_PRODUCT_DETAILS:
      return {
        ...state,
        loading: false,
        productDetails: action.payload,
      };
    case PRODUCT_TYPES.RESET_PRODUCT_DETAILS:
      return {
        ...state,
        loading: initialState.loading,
        productDetails: initialState.productDetails,
      };
    case PRODUCT_TYPES.TOGGLE_LOADER:
      return {
        ...state,
        loading: action.payload,
      };  
    default:
      return state;
  }
};

