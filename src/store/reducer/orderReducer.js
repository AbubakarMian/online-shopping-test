import actionTypes from "../action/constants/constants";
const USER_ORDERS = {
  orders: [
    // {
    //     user:{
    //         email:''
    //     },
    //     items:[
    //     ]
    // }
  ]
};

export default (state = USER_ORDERS, action) => {
  const user_orders = { ...state };
  switch (action.type) {
    case actionTypes.ADDORDER:
      user_orders.orders.push(action.payload);
      break;
    default:
      return user_orders;
  }
  return user_orders;
};
