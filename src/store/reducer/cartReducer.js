import actionTypes from '../action/constants/constants';
const USER_CART={
    cart_items:[
        
    ]
}

export default (state=USER_CART,action)=>{
    
    switch(action.type){
        case(actionTypes.ADDCART):
            state.cart_items.push(action.payload);
        break;
        case(actionTypes.REMOVECART):
        
            state.cart_items = state.cart_items.filter(

                function(value, index, arr){
                    return index !== action.payload;            
                }
            );        
        break;
        
        case(actionTypes.UPDATECART):
            state.cart_items = action.payload;
            break;
            default:
                return state;
    }
    return state;
}

