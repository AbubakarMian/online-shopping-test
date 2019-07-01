import actionTypes from '../action/constants/constants';
const USER_ORDERS={
    orders:[
        // {
        //     user:{
        //         email:''
        //     },
        //     items:[

        //     ]
        // }
        
    ]
}

export default (state=USER_ORDERS,action)=>{
    
    switch(action.type){
        case(actionTypes.ADDORDER):
            state.orders.push(action.payload);
        break;
        default:
            return state;
    }
    return state;
}

