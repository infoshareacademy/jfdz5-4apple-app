import React from 'react'
import { connect } from "react-redux";
import ShopList from "./ShopList";
import NoItemFound from "./NoItemFound";


class ShopListDetails extends React.Component {

  render() {

    const ProductList = this.props.filteredResults;
    const item = parseInt(this.props.item, 10);
    const shops = ProductList.filter(product => [product.id]
      .some(id => id === item))
      .map(product => product.shops)
      .reduce((result, next) => result.concat(next), [])
    return (
      <div className="container-narrow products--container">
        {shops === undefined ? <NoItemFound/> :
          <ShopList shops={shops}/>}
      </div>
    )
  }
}

export default connect(
  state => ({
    filteredResults: state.searching.filteredResults
  }),
)(ShopListDetails)