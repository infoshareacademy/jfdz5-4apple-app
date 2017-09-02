import React from 'react'

import SearchBar from './SearchBar'
import {Checkbox, ControlLabel, FormControl, FormGroup, Panel, PanelGroup, FieldGroup} from "react-bootstrap";

class ProductsFilters extends React.Component {


  render() {
    // console.log(products)

    return (<div>
      <SearchBar/>


      <PanelGroup defaultActiveKey="1" accordion>
        <Panel header="Sprecyzuj wyszukiwanie" eventKey="1">
          <form>
            <ControlLabel >Cena
              <FormControl type="text"/>
              -
              <FormControl type="text"/>
            </ControlLabel>
            <Checkbox >
              Damskie
            </Checkbox>
            <Checkbox >
              Męskie
            </Checkbox>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Wybierz rozmiar</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                {}
                <option value="select">select</option>
                <option value="other">...</option>
              </FormControl>
            </FormGroup>
          </form>
        </Panel>
      </PanelGroup>

    </div>)
  }
}

export default ProductsFilters