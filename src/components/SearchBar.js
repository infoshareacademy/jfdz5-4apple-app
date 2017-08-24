import React from 'react'

import {Navbar, Header, Brand, FomrGroup, FormGroup, FormControl, Button} from 'react-bootstrap'

const SearchBar = (
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
                            <FormControl className="search-input" type="text" placeholder="Znajdź produkt"/>
                        </FormGroup>
                        {' '}
                        <Button className="search-button" type="submit"><img src={magnifier} alt="search" height="35"/></Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </div>
        </Navbar>
    </div>
);

export default SearchBar