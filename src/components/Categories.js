import React from 'react'
import { connect } from "react-redux";

import './Categories.css'
import { ListGroup } from "react-bootstrap";
import CategoriesItem from "./CategoriesItem";
import { withRouter } from "react-router-dom";


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

export default withRouter(
  connect(
  state => ({
    allProducts: state.allProducts.data
  }),
)(Categories))
