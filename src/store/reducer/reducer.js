import actionTypes from '../action/constants/constants'
const INITIAL_STATE ={
    userName:'Abubakar',
    userEmail:null,
    userLoggedin:false
} 

export default (state=INITIAL_STATE,action)=>{
    
    switch(action.type){
        case (actionTypes.LOGINUSER):
        return ({
            ...state,
            userName: action.payload.userName,
            userEmail: action.payload.userEmail,
            userLoggedin:action.payload.userLoggedin
        })
        default: return state
        
    }

}