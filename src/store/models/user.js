// import React,{Component} from 'react';
import { connect } from "react-redux";
import loginAction from "../action/action";

// export const my_user = connect(state => ({ user_state: state.authReducer }));

//  export function get_user(){
//     return this.props.LoginUser;
// }

export function getLoginUser(state) {
  return {
    LoginUser: state.authReducer
  };
}

export function updateLoginUser(dispatch) {
  return {
    dispatcherUserSignin: user => {
      dispatch(loginAction(user));
    }
  };
}
function get_user_connected(props){
  return props.LoginUser;
}

export default connect(getLoginUser,updateLoginUser) (get_user_connected);
// export default connect(getLoginUser,updateLoginUser);

// export default connect(my_user);
