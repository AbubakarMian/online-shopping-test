import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../styles/product-card.css";

class ProductCard extends Component {
  render() {
    return (
      <Card className="card">
        <CardHeader title={this.props.product_name} />
        {this.props.product_quantity > 0 ? (
          <div className="quantity">{this.props.product_quantity}</div>
        ) : null}
        <Typography
          className="price"
          variant="body2"
          color="textSecondary"
          component="h1"
        >
          {this.props.product_price}
        </Typography>
        <CardMedia
          image={this.props.product_avatar}
          title={this.props.product_name}
          className="cardImg"
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
