import React from 'react'
import { connect } from "react-redux";

import {
  Tab,
  Tabs
} from 'react-bootstrap'

import SearchNavBar from '../SearchNavBar'
import SearchResultsList from '../SearchResultsList'
import SearchResultsGrid from '../SearchResultsGrid'
import DataFetcher from "../DataFetcher/DataFetcher";
import Categories from '../Categories.js'
import { presentationOfResults } from '../../state/presentationOfResults'
import SearchBarFilters from "../SearchBarFilters";


const TabbedResultsView = ({products, chosenView, changeView, allProducts}) => (
  <div>
    <div className={'helper-container'}> </div>
    <DataFetcher
      dataUrl={'/data/products.json'}
      component={SearchNavBar}
      propName="searchedProducts"
    />
    <div className={'cos'}>
    <SearchBarFilters/>
    <div className="app-container">
      <Categories/>
      <div className="content-container">
        <Tabs defaultActiveKey={chosenView} id="tabbed-results" onSelect={changeView} className="container-narrow">
          <Tab eventKey={1} title="Lista">
            <SearchResultsList products={products}/>
          </Tab>

          <Tab eventKey={2} title="Siatka">
            <SearchResultsGrid products={products}/>
          </Tab>
        </Tabs>
      </div>
      <div></div>
    </div>
    </div>
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
)(TabbedResultsView)