import React from 'react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { createDetailsList } from "./_utils/filtersDetails";
import { filterResults } from "../state/searching";

class CategoriesItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedProducts: this.props.searchedProducts
    }
  }

  toggleCollapse = (element) => {
    element.classList.toggle('category-collapsed')
  };

  applyCategoryFilter = (event, category) => {
    event.preventDefault();
    this.toggleCollapse(event.currentTarget.parentElement)
    this.props.history.push('/results')
    this.props.addSearchedResults(this.props.allProducts, category)
  };

  applyBrandFilter = (event, brand) => {
    event.preventDefault();
    this.props.addSearchedResults(this.props.allProducts, brand)
  };

  render() {
    return (
      <ul className="list-group-item categories__item">
        <a onClick={(event) => {
          this.applyCategoryFilter(event, this.props.category)
        }}>{this.props.category}</a>
        {
          createDetailsList(this.props.items, 'author').toString() === "" ?

            createDetailsList(this.props.items, 'brand').map((item, index) => {
              return <li className={'categories__brand'} key={index}><a onClick={(event) => {
                this.applyBrandFilter(event, item)
              }}>{item}</a></li>
            })
            :
            createDetailsList(this.props.items, 'author').map((item, index) => {
              return <li className={'categories__brand'} key={index}><a onClick={(event) => {
                this.applyBrandFilter(event, item)
              }}>{item}</a></li>
            })
        }
      </ul>
    )
  }
}

export default withRouter(
  connect(
    state => ({
      filteredResults: state.searching.searchedProducts,
      allProducts: state.allProducts.data
    }),
    dispatch => ({
      addSearchedResults: (searchedProducts, searchedItem) => dispatch(filterResults(searchedProducts, searchedItem)),
    })
  )(CategoriesItem)
)
