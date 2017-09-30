import React from 'react'
import {connect} from "react-redux";

import {
    Tab,
    Tabs
} from 'react-bootstrap'

import SearchBar from './SearchBar'
import SearchResultsList from './SearchResultsList'
import SearchResultsGrid from './SearchResultsGrid'
import DataFetcher from "./DataFetcher/DataFetcher";
import Categories from './Categories.js'
import {presentationOfResults} from '../state/presentationOfResults'

const TabbedResults = ({products, chosenView, changeView}) => (
    <div>
        <DataFetcher
            dataUrl={'http://localhost:3000/data/products.json'}
            component={SearchBar}
            propName="searchedProducts"
        />

        <div>
            <DataFetcher
                dataUrl={'http://localhost:3000/data/products.json'}
                component={Categories}
                propName="categoriesProducts"
            />
            <Tabs defaultActiveKey={chosenView} id="tabbed-results" onSelect={changeView} className="container">
                <Tab eventKey={1} title="List">
                    <SearchResultsList products={products}/>
                </Tab>

                <Tab eventKey={2} title="Grid">
                    <SearchResultsGrid products={products}/>
                </Tab>
            </Tabs>
        </div>
    </div>
)

export default connect(
    state => ({
        chosenView: state.presentationOfResults.chosenView
    }),
    dispatch => ({
        changeView: (key) => dispatch(presentationOfResults(key))
    })
)(TabbedResults)