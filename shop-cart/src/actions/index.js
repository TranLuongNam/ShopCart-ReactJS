import {
  ADD_TO_CART,
  CHANGE_MESSAGE,
  COMPLETE_PURCHASE,
  DELETE_PRODUCT_CART,
  UPDATE_QUANTITY,
} from "../constants/ActionTypes";

export const actAddToCart = (product, quantity) => {
  return {
    type: ADD_TO_CART,
    product,
    quantity,
  };
};

export const actChangeMessage = (message) => {
  return {
    type: CHANGE_MESSAGE,
    message,
  };
};

export const actDeleteProductCart = (product) => {
  return {
    type: DELETE_PRODUCT_CART,
    product,
  };
};
export const actUpdateQuantity = (product, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    product,
    quantity,
  };
};
export const actCompletePurchase = (message) => {
  return {
    type: COMPLETE_PURCHASE,
    message
  };  
};
