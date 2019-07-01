import actionTypes from './constants/constants'

export default function loginAction(user){

        return dispatch => {
            dispatch({
                type:actionTypes.LOGINUSER,
                payload:user
            });
        }
}

export function addCart(cart){

    return dispatch => {
        dispatch({
            type:actionTypes.ADDCART,
            payload:cart
        });
    }
}

export function removeCart(id){
    return dispatch => {
        dispatch({
            type:actionTypes.REMOVECART,
            payload:id
        })
    }
}

export function updateCart(cart){
    return dispatch => {
        dispatch({
            type:actionTypes.UPDATECART,
            payload:cart
        })
    }
}

export function addOrder(order){

    return dispatch => {
        dispatch({
            type:actionTypes.ADDORDER,
            payload:order
        });
    }
}
