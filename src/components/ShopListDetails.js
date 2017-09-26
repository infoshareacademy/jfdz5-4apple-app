import React from 'react'
import products from '../../data/products.json'

class ShopListDetails extends React.Component{

render(){
    const x = products;
  return  <h1>{this.props.item}</h1>

}

}
export default ShopListDetails