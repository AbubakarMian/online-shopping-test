import React,{Component} from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {addCart} from '../store/action/action'

class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            products:[],
            cart:this.props.UserCart
        }
    }

    divCart= {
        padding:"0px 50px",
        marginLeft: "80px",
    }
    divUser= {
        marginTop: '-22px',
        float: 'right',
        lineHeight: '15px'
    }

    heading={
        marginBottom: '55px'
    }

    componentDidMount(){
        // axios.get('http://localhost:3000/products')
        axios.get('https://backend.dev.everrecruit.indusvalleylabs.com/test/api')
        .then(response=>{
            this.setState({
                products:response.data
            })
        })
        .catch(error=>{
            console.log(error);
        })
    }

    add_to_cart(product,b){
        this.props.dispatchUpdateCart(product);
    }

    render(){
        const {products} = this.state;
        
        return(        
            <div>
                <div style={this.heading}>
                <div style={this.divUser}>
                    <h3>Name : {this.props.User.userName}</h3>
                    <h3>Email : {this.props.User.userEmail}</h3>
                </div>
                <h1>Product List</h1>
                </div>
                
                <div style={this.divCart}>
                    {
                        products.length?
                        products.map(product=>
                            <div key={product.id}>
                            <ProductCard  col= '4 sm'
                            product_name={product.name} 
                            product_price={product.price}
                            product_avatar={product.avatar}
                            button={<Button 
                                variant="contained" 
                                color="primary"
                                onClick={this.add_to_cart.bind(this,product)}
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
       dispatchUpdateCart:(cart)=>{
         dispatch(addCart(cart))
       }
    })
}

export default connect(getCart,setCart)(Home);