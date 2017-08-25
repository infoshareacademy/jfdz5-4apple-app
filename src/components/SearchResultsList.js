import React from 'react'

import searchResults from '../components/_utils/searchingProducts'
import {ListGroupItem, ListGroup} from "react-bootstrap";

const ProductsList = (
    <ListGroup>{
        searchResults.map(function (product) {
            return <ListGroupItem>
                {product.brand}
            </ListGroupItem>
        })
    }
    </ListGroup>
);
export default ProductsList