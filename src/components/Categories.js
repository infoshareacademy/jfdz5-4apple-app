import React from 'react'
import { connect } from "react-redux";

import './Categories.css'
import { ListGroup } from "react-bootstrap";
import CategoriesItem from "./CategoriesItem";


class Categories extends React.Component {


  render() {
    return (
        <ListGroup className={'categories'}>
          {this.props.allProducts.map((product, index) => {
            return <CategoriesItem key={index} category={product.category} items={product.items}/>
          })}
        </ListGroup>
    )
  }
}

export default connect(
  state => ({
    allProducts: state.allProducts.data
  }),
)(Categories)
