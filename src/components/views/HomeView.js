import React from 'react'

import SearchBar from '../SearchBar'
import DataFetcher from "../DataFetcher/DataFetcher";

const HomeView = () => (
  <div>
    <DataFetcher
      dataUrl={'http://localhost:3000/data/products.json'}
      component={SearchBar}
      propName="searchedProducts"
    />
  </div>
)


export default HomeView

