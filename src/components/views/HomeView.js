import React from 'react'

import SearchBar from '../SearchBar'
import DataFetcher from "../DataFetcher/DataFetcher";
import Viewed from "../Viewed";

const HomeView = () => (
  <div>
    <DataFetcher
      dataUrl={'http://localhost:3000/data/products.json'}
      component={SearchBar}
      propName="searchedProducts"
    />
      <DataFetcher
          dataUrl={'http://localhost:3000/data/products.json'}
          component={Viewed}
          propName="searchedProducts"
      />
  </div>

)


export default HomeView

