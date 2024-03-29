import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class PrivateRoute extends Component {
  render() {
    let route = null;

    if (this.props.authRequired) {
      if (this.props.LoginUser.userLoggedin) {
        route = (
          <Route path={this.props.path} component={this.props.component} />
        );
      } else {
        route = <Redirect to="/signup" />;
      }
    } else {
      route = (
        <Route
          key={this.props.key}
          path={this.props.path}
          exact={this.props.exact}
          component={this.props.component}
        />
      );
    }

    return route;
  }
}

function getLoginUser(state) {
  return {
    LoginUser: state.authReducer
  };
}

export default connect(getLoginUser)(PrivateRoute);
