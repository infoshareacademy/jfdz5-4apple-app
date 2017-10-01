import React from 'react'

import SearchBar from '../SearchBar'
import DataFetcher from "../DataFetcher/DataFetcher";
import Categories from "../Categories";
import viewedProducts from '../viewedProducts'

const HomeView = () => {
    const initialState = [];

    return (
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
                         propCategories={initialState}
                         propInitialName="initialState"
            />
            <viewedProducts/>
        </div>
    )
}


export default HomeView

