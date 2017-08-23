import React from 'react'

import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap'
import logo from "../../img/logo.svg"
import magnifier from "../../img/magnifier.png"

const HomeView = () => (
    <div>
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a className="logo"><img src={logo} alt="logo" height="40"/></a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullLeft>
                    <FormGroup>
                        <FormControl className="search-input" type="text" placeholder="Znajdź produkt"/>
                    </FormGroup>
                    {' '}
                    <Button type="submit"><img src={magnifier} alt="search" height="20"/></Button>
                </Navbar.Form>
            </Navbar.Collapse>
        </Navbar>
    </div>
)


export default HomeView

