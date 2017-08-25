import React from 'react'

import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap'
import logo from "../../img/logo.svg"
import magnifier from "../../img/magnifier.png"

// import searchProducts from '../_utils/searchingProducts'


// searchProducts = (event) => searchProducts(event.target.value)
// onSubmit="searchProducts"  dodać do dom

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
    </div>
)


export default HomeView

