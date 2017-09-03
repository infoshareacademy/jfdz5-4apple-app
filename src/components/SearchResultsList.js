import React from 'react'

import {ListGroup} from "react-bootstrap";
import '../components/SearchResultsList.css'
import {connect} from "react-redux";

import {search} from "../state/searching";
import NoItemFound from "./NoItemFound";
import SearchResultsListItem from "./SearchResultsListItem";

const SearchResultsList = ({products, searchedItems}) => {

  const searchingName = searchedItems;

  const searchResults = products.map(product => product.items)
    .reduce((result, next) => result.concat(next), [])
    .filter(product => [product.brand, product.model, product.title, product.author]
      .some(name => name && name.includes(searchingName)
      )
    )
  return (
    <div className="container products--container">
      <ListGroup>{
        searchResults.toString() === "" ?
          <NoItemFound/>
          :
          <SearchResultsListItem searchResults={searchResults}/>
      }
      </ListGroup>
    </div>
  )
}

export default
connect(
  state => ({
    searchedItems: state.searching.searchedItems
  }),
  dispatch => ({
    addSearchedItem: searchedItem => dispatch(search(searchedItem))
  })
)(SearchResultsList)
