import React from 'react'

import SearchResultsList from '../SearchResultsList'
import SearchBar from '../SearchBar'
import DataFetcher from './../DataFetcher'


const SearchResultsListView = () => (
  <div>
    <SearchBar/>
    <DataFetcher
      dataUrl={'http://localhost:3000/data/products.json'}
      component={SearchResultsList}
      propName="products"
    />
  </div>
)

export default SearchResultsListView