import React from 'react'

import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap'
import logo from "../../img/logo.svg"
import magnifier from "../../img/magnifier.png"
import ProductsList from "../SearchResultsList";
import searchResults from '../_utils/searchingProducts'
import {ListGroupItem, ListGroup} from "react-bootstrap";



const HomeView = () => (
    <div>
        <Navbar>
            <div className="navbar--contaiter">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a className="logo"><img src={logo} alt="logo" height="50"/></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" placeholder="Znajdź produkt"/>
                        </FormGroup>
                        {' '}
                        <Button className="search-button" type="submit"><img src={magnifier} alt="search" height="35"/></Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </div>
        </Navbar>
        <ListGroup>{
            searchResults.map(function (product) {
                return <ListGroupItem>
                    <img src={product.image}/>
                    <h1>{product.brand}</h1>
                    <h2>{product.model}</h2>
                    <h3>{product.price}</h3>
                </ListGroupItem>
            })
        }
        </ListGroup>
    </div>
)


export default HomeView

