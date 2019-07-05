import React,{Component} from 'react';
import {connect} from 'react-redux';
import loginAction from '../store/action/action';
import History from '../History/History';
import '../styles/home.css';
import '../styles/signup.css';

class Signup extends Component{

    constructor(props){
        super(props);
        this.state={
            userName:'',
            userEmail:''
        }  
        if(this.props.LoginUser.userLoggedin){
            this.props.dispatcherUserSignin({            
                userName:'',
                userEmail:'',
                userLoggedin:false
            });
        }
        
    }
    loginSignupHandler(){

        let state_name = this.state.userName;
        
        if(state_name===''){
            return;
        }
        
        let state_email = this.state.userEmail;
        let emailValid = state_email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

        if(!emailValid){
            return;
        }

        this.props.dispatcherUserSignin({            
            userName:state_name,
            userEmail:state_email,
            userLoggedin:true
        });
        
        History.push('/');
    }
    usernameHandler(event){
        this.setState({
            userName:event.target.value
        });
    }

    userEmailHandler(event){
        this.setState({
            userEmail:event.target.value
        });
    }

    

    render(){
        return(
            <div className='heading-signup'>
                {/* <h1>{this.props.LoginUser.userName}</h1> */}
                <div style={this.inputDiv}>
                    <input className='inputClass' placeholder='User Name' type='text' onChange={this.usernameHandler.bind(this)} /><br/>
                    <input className='inputClass' placeholder='User Email' type='email' onChange={this.userEmailHandler.bind(this)} /><br/>
                    <button className='btn' onClick={this.loginSignupHandler.bind(this)}>Signup</button>
                </div>
            </div>
        )
    }
}

function getLoginUser(state){
    return ({
        LoginUser:state.authReducer
    })
}

function updateLoginUser(dispatch){
    return ({
        dispatcherUserSignin:(user)=>{
            dispatch(loginAction(user))
        }
    });
}
export default connect(getLoginUser,updateLoginUser)(Signup);


