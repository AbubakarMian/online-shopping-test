import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const customStyles = {
    cardImg: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '225px',
        maxWidth: '95%',
        margin: 'auto',
    },
    
    card: {
        width: "30%",
        float: 'left',
        margin: '8px',
        position: 'relative',

        span: {
            wordBreak: 'break-all',
            color: 'red'
        }
    },

    media: {
      height: 100,
    },
    avatar: {
      backgroundColor: red[500],
    },
    price:{
        fontSize:"23px",
        marginBottom:'13px'
    },
    quantity:{
        backgroundColor:'#d80000',
        color: '#FFF',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '28px',
        position: 'absolute',
        top: '12px',
        right: '12px',

        padding: '1px 1px',
        minWidth: '30px',
        height: '30px',
        borderRadius: '5px',
        boxShadow: 'rgba(17, 17, 17, 0.2) 1px 1px 5px',
    },
}
    class ProductCard extends Component{
        
        render() {
            console.log('quantity uuu',this.props.product_quantity);
            return (
            <Card style={customStyles.card}>
                <CardHeader
               
                title={this.props.product_name}
                />
                {
                    this.props.product_quantity>0?
                        <div style={customStyles.quantity}>{this.props.product_quantity}</div>
                        :null
                }
                {/* <div style={customStyles.quantity}>5</div> */}
                <Typography style={customStyles.price} variant="body2" color="textSecondary" component="h1">
                        {this.props.product_price}
                </Typography>
                <CardMedia
                image= {this.props.product_avatar}
                title={this.props.product_name}
                style={customStyles.cardImg}
                />
                <CardContent>
                
                <Typography variant="body2" color="textSecondary" component="p">
                    {this.props.button}
                </Typography>
                </CardContent>
                
                
            </Card>
            );
        }
    }
    export default ProductCard;
