import React from 'react'
import { connect } from "react-redux";

import { filterResults } from "../state/searching";
import NoItemFound from "./NoItemFound";
import SearchResultsGridItem from "./SearchResultsGridItem";

class SearchResultsGrid extends React.Component {
  render() {
    const searchResults = this.props.filteredResults

    return (

      <div>
        <div>{
          searchResults && searchResults.toString() === "" ?
            <NoItemFound/>
            :
            <SearchResultsGridItem searchResults={searchResults}/>
        }
        </div>
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
)(SearchResultsGrid)
