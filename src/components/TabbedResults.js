import React from 'react'
import {connect} from "react-redux";

import {
    Tab,
    Tabs
} from 'react-bootstrap'

import SearchBar from './SearchBar'
import SearchResultsList from './SearchResultsList'
import SearchResultsGrid from './SearchResultsGrid'
import {filterResults} from "../state/searching";

class TabbedResults extends React.Component {
    render() {
        const searchResults = this.props.filteredResults

        return (
            <div>
                <SearchBar searchResults={searchResults}/>
                <Tabs defaultActiveKey={1} id="tabbed-results">
                    <Tab eventKey={1} title="List">
                        <SearchResultsList products={this.props.products}/>
                    </Tab>

                    <Tab eventKey={2} title="Grid">
                        <SearchResultsGrid products={this.props.products}/>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}
// const TabbedResults = ({products}) => (
//     <div>
//         <SearchBar filteredResults={filterResults}/>
//         <Tabs defaultActiveKey={1} id="tabbed-results">
//             <Tab eventKey={1} title="List">
//                 <SearchResultsList products={products}/>
//             </Tab>
//
//             <Tab eventKey={2} title="Grid">
//                 <SearchResultsGrid products={products}/>
//             </Tab>
//         </Tabs>
//     </div>
// )

export default connect(
    state => ({
        filteredResults: state.searching.filteredResults
    }),
    dispatch => ({
        addSearchedResults: (searchedProducts, searchedItem) => dispatch(filterResults(searchedProducts, searchedItem))
    })
)(TabbedResults)