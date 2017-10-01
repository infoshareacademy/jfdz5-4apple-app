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

import './TabbedResults.css'
import SearchBarFilters from "./SearchBarFilters";


const TabbedResults = ({products, chosenView, changeView, allProducts}) => (
    <div>
        <DataFetcher
            dataUrl={'http://localhost:3000/data/products.json'}
            component={SearchBar}
            propName="searchedProducts"
        />
        <SearchBarFilters/>
        <div className="categories--container">
            <DataFetcher
                dataUrl={'http://localhost:3000/data/products.json'}
                component={Categories}
                propName="categoriesProducts"
            />
        </div>
        <Tabs defaultActiveKey={chosenView} id="tabbed-results" onSelect={changeView} className="container">
            <Tab eventKey={1} title="Lista">
                <SearchResultsList products={products}/>
            </Tab>

      <Tab eventKey={2} title="Siatka">
        <SearchResultsGrid products={products}/>
      </Tab>
    </Tabs>
  </div>
)

export default connect(
    state => ({
        chosenView: state.presentationOfResults.chosenView,
        allProducts: state.allProducts.data
    }),
    dispatch => ({
        changeView: (key) => dispatch(presentationOfResults(key))
    })
)(TabbedResults)