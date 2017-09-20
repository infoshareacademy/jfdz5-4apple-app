import React from 'react'

import {
    Tab,
    Tabs
} from 'react-bootstrap'

import SearchBar from './SearchBar'
import SearchResultsList from './SearchResultsList'
import SearchResultsGrid from './SearchResultsGrid'
import {filterResults} from "../state/searching";

const TabbedResults = ({products}) => (
    <div>
        <SearchBar filteredResults={filterResults}/>
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