import React from 'react'

import SearchResultsList from '../SearchResultsList'
import SearchBar from '../SearchBar'
import DataFetcher from './../DataFetcher'
import SearchBarFilters from "../SearchBarFilters";


const SearchResultsListView = () => (
  <div>
    <DataFetcher
      dataUrl={'http://localhost:3000/data/products.json'}
      component={SearchBar}
      propName="searchedProducts"
    />
    {/*<SearchBarFilters/>*/}
    <SearchResultsList/>
  </div>
)

export default SearchResultsListView