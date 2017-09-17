import React from 'react'

import {Link} from 'react-router-dom'
import {Thumbnail} from "react-bootstrap";

import ButtonBlue from "./ButtonBlue";
import './SearchResultsList.css'

const SearchResultsGridItem = ({searchResults}) => {
    return (
        <div>
            {searchResults.map((product, index) => {
                return (
                    <div>

                        <Thumbnail src="http://via.placeholder.com/242x200" alt="242x200">

                            <h2>{product.brand} {product.model} {product.author} {product.title} </h2>

                        </Thumbnail>

                    </div>
                )

            })}</div>
    )
}
export default SearchResultsGridItem