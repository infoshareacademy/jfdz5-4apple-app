import React from 'react'

import {
    Tab,
    Tabs
} from 'react-bootstrap'

import SearchBar from './SearchBar'
import SearchResultsList from './SearchResultsList'
import SearchResultsGrid from './SearchResultsGrid'
import DataFetcher from "./DataFetcher/DataFetcher";

const TabbedResults = ({products}) => (
    <div>
        <DataFetcher
            dataUrl={'http://localhost:3000/data/products.json'}
            component={SearchBar}
            propName="searchedProducts"
        />
        <Tabs defaultActiveKey={1} id="tabbed-results">
            <Tab eventKey={1} title="List">
                <SearchResultsList products={products}/>
            </Tab>

            <Tab eventKey={2} title="Grid">
                <SearchResultsGrid products={products}/>
            </Tab>
        </Tabs>
    </div>
)

export default TabbedResults