import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class Navbar extends Component{

    render(){
        return (
            <div> 
                <div>
                    <h3>{this.props.LoginUser.userName}</h3>
                    <h3>{this.props.LoginUser.userEmail}</h3>
                </div>
                <ul>
                    <li>
                        <Link to='/signup'>Signup</Link>
                    </li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/cart'>Cart</Link>
                    </li>
                    <li>
                        <Link to='/order'>Order</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

function getLoginUser(state){
    return ({
        LoginUser:state.authReducer
    })
}

export default connect(getLoginUser)(Navbar);