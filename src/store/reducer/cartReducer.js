import actionTypes from "../action/constants/constants";
const USER_CART = {
  cart_items: []
};

export default (state = USER_CART, action) => {
  const cart_state = { ...state };
  switch (action.type) {
    case actionTypes.ADDCART:
      cart_state.cart_items.push(action.payload);
      break;
    case actionTypes.REMOVECART:
      cart_state.cart_items = cart_state.cart_items.filter(
        (value, index) => index !== action.payload
      );
      break;

    case actionTypes.UPDATECART:
      cart_state.cart_items = action.payload;
      break;
    default:
      return cart_state;
  }
  return cart_state;
};
