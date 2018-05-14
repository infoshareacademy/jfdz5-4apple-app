import React from 'react'

import { ListGroup, Thumbnail } from "react-bootstrap";
import '../components/SearchResultsList.css'
import {connect} from "react-redux";


import {filterResults} from "../state/searching";
import NoItemFound from "./NoItemFound";
import SearchResultsListItem from "./SearchResultsListItem";

class SearchResultsList extends React.Component {

  render() {
    const searchResults = this.props.filteredResults;

    return (
      <Thumbnail className="container-narrow products--container">
        <ListGroup>{
          searchResults && searchResults.toString() === "" ?
            <NoItemFound/>
            :
            <SearchResultsListItem searchResults={searchResults}/>
        }
        </ListGroup>
      </Thumbnail>
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
