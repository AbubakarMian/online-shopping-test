import React,{Component} from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {updateCart} from '../store/action/action';
import History from '../History/History';
import '../styles/home.css';

class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            products:[],
            cart:this.props.UserCart
        }
    }

    componentDidMount(){
        axios.get('http://backend.dev.everrecruit.indusvalleylabs.com/test/api')
        .then(response=>{
            this.setState({
                products:response.data
            })
        })
        .catch(error=>{
            console.log(error);
        })
    }

    add_to_cart(product,index){

        if(!this.props.User.userLoggedin){            
            History.push('/signup');
        }
        
        if(product.hasOwnProperty('quantity')){
            product.quantity = ++product.quantity;
        }
        else{
            product.quantity = 1;
        }

        let products = this.state.products;
        products[index] = product;
        this.setState({
            products:products
        });
        let cart_products = [];

        cart_products = products.filter(function (product){

            return (product.hasOwnProperty('quantity') && (product.quantity>0)) ?  product : null;

        });

        this.props.dispatchUpdateCart(cart_products);
    }

    render(){
        
        return(        
            <div>
                <div className='heading'>
                <h1>Product List</h1>
                </div>
                
                <div className='divCart'>
                    {
                        this.state.products.length?
                        this.state.products.map((product,index)=>
                            <div key={product.id}>
                            <ProductCard  col= '4 sm'
                            product_name={product.name} 
                            product_price={product.price}
                            product_avatar={product.avatar}
                            product_quantity={product.quantity}
                            button={<Button 
                                variant="contained" 
                                color="primary"
                                onClick={this.add_to_cart.bind(this,product,index)}
                                >
                                    Add to Cart
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
    //    dispatchUpdateCart:(cart)=>{
    //      dispatch(addCart(cart))
    //    },
       dispatchUpdateCart:(update_cart)=>{
        dispatch(updateCart(update_cart))
      }
    })
}

export default connect(getCart,setCart)(Home);