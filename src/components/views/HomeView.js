import React from 'react'

import SearchBar from '../SearchBar'
import DataFetcher from "../DataFetcher/DataFetcher";
import Categories from "../Categories";

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
        </div>
    )
}


export default HomeView

