import React,{Component} from 'react';
import {connect} from 'react-redux';
import {removeCart,addOrder,updateCart} from '../store/action/action'
import ProductCard from './ProductCard';
import Button from '@material-ui/core/Button';
import History from '../History/History';


class Cart extends Component{

    constructor(props){
        super(props);
        this.state={
            cart:this.props.UserCart.cart_items
        }
    }

    remove_from_cart(id,event){
        this.props.dispatchRemoveCart(id);
        this.setState({
            cart:this.props.UserCart.cart_items
        })
    }

    order_cart(event){

        var order ={
            user:{
                userName:this.props.User.userName,
                userEmail:this.props.User.userEmail,
            },
            items:this.props.UserCart.cart_items
        }
        
        this.props.dispatchOrderCart(order);
        this.props.dispatchEmptyCart();
        this.setState({
            cart:this.props.UserCart.cart_items
        })        
        
        History.push('/order');
    }
    order_now={
        float:'right',        
        marginRight: '53px',
        marginTop: '-33px'
    }
    
    divUser= {
        marginTop: '-22px',
        float: 'right',
        lineHeight: '15px'
    }

    heading={
        marginBottom: '55px'
    }

    render(){
        let products = this.state.cart;
        let index = 0;
        return(        
            <div>
                            
            <div style={this.heading}>
                <Button 
                    variant="contained" 
                    color="primary"
                    style={this.order_now}
                    onClick={this.order_cart.bind(this)}
                    >Order Now
                    </Button>
            </div>
                <div style={this.divCart}>
                    {                        
                        products.length?
                        products.map((product)=>
                            <div key={product.id}>
                            <ProductCard  col= '4 sm'
                            product_name={product.name} 
                            product_price={product.price}
                            product_avatar={product.avatar}
                            product_quantity={product.quantity}
                            button={<Button 
                                variant="contained" 
                                color="primary"
                                // onClick={this.remove_from_cart.bind(this,product.id)}
                                onClick={this.remove_from_cart.bind(this,index++)}
                                >Remove
                                </Button>}
                            />                             
                            </div>
                        )                        
                        :null
                    }
                </div>
            </div>
        )
    }
    
}

function getCart(state){
    return ({
        UserCart:state.cartReducer,
        User:state.authReducer
    })
}

function setCart(dispatch){
    return ({
        dispatchRemoveCart:(id)=>{
         dispatch(removeCart(id))
       },
       dispatchOrderCart:(order)=>{
        dispatch(addOrder(order))
      },
      dispatchEmptyCart:()=>{
       dispatch(updateCart([]))
     }
    })
}

export default connect(getCart,setCart) (Cart);