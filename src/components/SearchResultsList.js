import React from 'react'

import {ListGroup} from "react-bootstrap";
import '../components/SearchResultsList.css'
import {connect} from "react-redux";


import {filterResults} from "../state/searching";
import NoItemFound from "./NoItemFound";
import SearchResultsListItem from "./SearchResultsListItem";

class SearchResultsList extends React.Component {

  render() {
    const searchResults = this.props.filteredResults

    return (

      <div className="container products--container">
        <ListGroup>{
          searchResults && searchResults.toString() === "" ?
            <NoItemFound/>
            :
            <SearchResultsListItem searchResults={searchResults}/>
        }
        </ListGroup>
      </div>
    )
  }
}

export default connect(
  state => ({
    filteredResults: state.searching.filteredResults
  }),
  dispatch => ({
    addSearchedResults: (searchedProducts, searchedItem) => dispatch(filterResults(searchedProducts, searchedItem))
  })
)(SearchResultsList)
