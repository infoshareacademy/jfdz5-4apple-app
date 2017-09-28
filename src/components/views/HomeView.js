import React from 'react'

import SearchBar from '../SearchBar'
import DataFetcher from "../DataFetcher/DataFetcher";
import Categories from "../Categories";

const HomeView = () => (

    <div>
        <DataFetcher
            dataUrl={'http://localhost:3000/data/products.json'}
            component={SearchBar}
            propName="searchedProducts"
        />

        <DataFetcher
            dataUrl={'http://localhost:3000/data/products.json'}
            component={Categories}
            propName="categoriesProducts"
        />
    </div>

)


export default HomeView

