import {
  ADD_TO_CART,
  COMPLETE_PURCHASE,
  DELETE_PRODUCT_CART,
  UPDATE_QUANTITY,
} from "../constants/ActionTypes";

const data = JSON.parse(localStorage.getItem("cart"));
const initialState = data ? data : [];

const cartReducer = (state = initialState, action) => {
  const { product, quantity } = action;
  let index = -1;
  switch (action.type) {
    case ADD_TO_CART: {
      index = state.findIndex((x) => x.product.id === product.id);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({ product, quantity });
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    }
    case DELETE_PRODUCT_CART: {
      index = state.findIndex((x) => x.product.id === product.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    }
    case UPDATE_QUANTITY: {
      index = state.findIndex((x) => x.product.id === product.id);
      if (index !== -1) {
        state[index].quantity = quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    }
    case COMPLETE_PURCHASE: {
      state = [];
      localStorage.clear();
      return state;
    }
    default:
      return [...state];
  }
};

export default cartReducer;
