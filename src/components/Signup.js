import React,{Component} from 'react';
import {connect} from 'react-redux';
import loginAction from '../store/action/action'
// import History from '../History/History';

class Signup extends Component{

    constructor(props){
        super(props);
        this.state={
            userName:'',
            userEmail:''
        }
    }

    loginSignupHandler(){

        this.props.dispatcherUserSignin({            
            userName:this.state.userName,
            userEmail:this.state.userEmail,
            userLoggedin:true
        });
        console.log(this.props)
        this.props.history.push('/');
        // this.props.History.push('/');

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
                <h1>{this.props.LoginUser.userName}</h1>
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

