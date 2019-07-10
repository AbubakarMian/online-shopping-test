import myAuthReducer from "./AuthReducer";
import myCartReducer from "./cartReducer";
import myorderReducer from "./orderReducer";
import { combineReducers } from "redux";

export default combineReducers({
  authReducer: myAuthReducer,
  cartReducer: myCartReducer,
  orderReducer: myorderReducer
});
