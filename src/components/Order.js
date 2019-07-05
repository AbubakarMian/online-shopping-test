import React,{Component} from 'react';
import {connect} from 'react-redux';
import ProductCard from './ProductCard';
import '../styles/home.css'

class Order extends Component{

    render(){

        let orders_arr = this.props.Orders.orders;
        let orders_body = [];

        orders_body.push(<h1 className='heading' key='heading'>Orders</h1>);

            for (let index = 0; index < orders_arr.length; index++) {
                
                let user_orders = orders_arr[index].items;

                for (let item_index = 0; item_index < user_orders.length; item_index++) {
                    
                    orders_body.push(<div key={user_orders[item_index].id}>
                        <ProductCard  col= '4 sm'
                            product_name={user_orders[item_index].name} 
                            product_price={user_orders[item_index].price}
                            product_avatar={user_orders[item_index].avatar}
                            product_quantity={user_orders[item_index].quantity}
                        />                             
                        </div>)
                }               
            } ;
               
        return(          
        <div>      
            {
                orders_body.map((orders)=>
                    {return orders}
                )
            }
        </div>
        )
    }
}

function getOrders(state){
    return ({
        Orders:state.orderReducer,
        User:state.authReducer
    })
}

export default connect(getOrders) (Order);