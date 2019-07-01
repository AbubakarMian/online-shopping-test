import React,{Component} from 'react';
import {connect} from 'react-redux';
import ProductCard from './ProductCard';

class Order extends Component{
    
    divUser= {
        marginTop: '-22px',
        float: 'right',
        lineHeight: '15px'
    }

    heading={
        marginBottom: '55px'
    }

    render(){

        let orders_arr = this.props.Orders.orders;
        let orders_body = [];

        orders_body.push(<div style={this.heading}>
        <div style={this.divUser}>
        <h3>Name : {this.props.User.userName}</h3>
        <h3>Email : {this.props.User.userEmail}</h3>
        </div>
        <h1>Orders</h1>
        </div>);

            for (let index = 0; index < orders_arr.length; index++) {
                
                let user_orders = orders_arr[index].items;

                for (let item_index = 0; item_index < user_orders.length; item_index++) {
                    
                    orders_body.push(<div key={user_orders[item_index].id}>
                        <ProductCard  col= '4 sm'
                        product_name={user_orders[item_index].name} 
                        product_price={user_orders[item_index].price}
                        product_avatar={user_orders[item_index].avatar}
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