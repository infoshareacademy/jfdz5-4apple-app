import React from 'react'

import SearchResultsGrid from '../SearchResultsGrid'
import SearchBar from '../SearchBar'
import DataFetcher from './../DataFetcher'


const SearchResultsGridView = () => (
    <div>
        <DataFetcher
            dataUrl={'http://localhost:3000/data/products.json'}
            component={SearchBar}
            propName="searchedProducts"
        />
        <SearchResultsGrid/>
    </div>
)

export default SearchResultsGridView
