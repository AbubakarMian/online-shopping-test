import React,{Component} from 'react'
import {
    Router,
    Route, 
    Switch,
    Redirect
} from 'react-router-dom'
import {connect} from 'react-redux';

class PrivateRoute extends Component{

    constructor(props){
        super(props)
    }

    render(){
        let route = null;
        
        if(this.props.authRequired && (!this.props.LoginUser.userLoggedin)){

            if(this.props.LoginUser.userLoggedin){
                 route = <Route path={this.props.path} component={this.props.component} />;
    
            }
            else{
                 route = <Redirect to='/signup' />;
            }
        }
        else{
            console.log('in else');
         route = 
             <Route
                key={this.props.key}
                path={this.props.path}
                exact={this.props.exact}
                component={this.props.component}
            />
        }
console.log('route : ',this.props);
        return (route)
    }
}


function getLoginUser(state){
  return ({
      LoginUser:state.authReducer
  })
}

export default connect(getLoginUser)(PrivateRoute);