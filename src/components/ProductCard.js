import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const customStyles = {
    cardImg: {
      height: '233px',
        
    },
    
    card: {
        width: "30%",
        float: 'left',
        margin: '8px'
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
    }
}
    class ProductCard extends Component{
        
        render() {
            return (
            <Card style={customStyles.card}>
                <CardHeader
               
                title={this.props.product_name}
                />
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
