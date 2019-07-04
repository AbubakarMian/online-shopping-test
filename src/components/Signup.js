import React,{Component} from 'react';
import {connect} from 'react-redux';
import loginAction from '../store/action/action';

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
        
        this.props.history.push('/');
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

    inputClass={
        lineHeight: '39px',
        marginBottom: '25px',
        textAlign: 'center',
        width: '31%',
          
    }

    inputDiv={        
        marginTop: '135px'
    }
    btn={
        
        lineHeight: '39px',
        width: '31%',
        color: 'white',
        backgroundColor: '#1e2ab3',
        borderRadius: '17px 17px 17px 17px',
        border:'0px',
        outline: '0px',
    }

    render(){
        return(
            <div>
                {/* <h1>{this.props.LoginUser.userName}</h1> */}
                <div style={this.inputDiv}>
                    <input style={this.inputClass} placeholder='User Name' type='text' onChange={this.usernameHandler.bind(this)} /><br/>
                    <input style={this.inputClass} placeholder='User Email' type='email' onChange={this.userEmailHandler.bind(this)} /><br/>
                    <button style={this.btn} onClick={this.loginSignupHandler.bind(this)}>Signup</button>
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


