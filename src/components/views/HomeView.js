import React from 'react'

import SearchBar from '../SearchBar'
import DataFetcher from "../DataFetcher/DataFetcher";
import Categories from "../Categories";

const HomeView = () => {
  return (
    <div>
      <DataFetcher
        dataUrl={'/data/products.json'}
        component={SearchBar}
        propName="searchedProducts"
      />
      <Categories/>
    </div>
  )
}

export default HomeView

