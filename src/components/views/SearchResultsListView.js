import React from 'react'

import SearchResultsList from '../SearchResultsList'
import SearchBarWithFilters from "../SearchBarWithFilters";

const SearchResultsListView = () => (
  <div>
    <SearchBarWithFilters/>
    <SearchResultsList/>
  </div>
)

export default SearchResultsListView