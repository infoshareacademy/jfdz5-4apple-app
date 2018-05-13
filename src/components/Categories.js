import React from 'react'
import { connect } from "react-redux";

import './Categories.css'
import { ListGroup, Panel, PanelGroup } from "react-bootstrap";
import CategoriesItem from "./CategoriesItem";
import { withRouter } from "react-router-dom";

class Categories extends React.Component {

  render() {
    return (
      <div>
        <ListGroup className={'categories'}>
          {this.props.allProducts.map((product, index) => {
            return <CategoriesItem key={index} category={product.category} items={product.items}/>
          })}
        </ListGroup>
        <PanelGroup className='categories-mobile' defaultActiveKey="2" accordion>
          <Panel className='categories-mobile__header' header={"Kategorie"} eventKey="1">
            {this.props.allProducts.map((product, index) => {
              return <CategoriesItem key={index} category={product.category} items={product.items}/>
            })}
          </Panel>
        </PanelGroup>
      </div>
    )
  }
}

export default withRouter(
  connect(
    state => ({
      allProducts: state.allProducts.data
    }),
  )(Categories))
