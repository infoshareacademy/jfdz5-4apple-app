import React from 'react'

import SearchBar from './SearchBar'
import {Checkbox, ControlLabel, FormControl, FormGroup, Panel, PanelGroup} from "react-bootstrap";

class ProductsFilters extends React.Component {

  render() {
    return (<div>
      <SearchBar/>
      <PanelGroup defaultActiveKey="1" accordion>
        <Panel header="Sprecyzuj wyszukiwanie" eventKey="1">

          <Checkbox checked readOnly>
            Checkbox
          </Checkbox>
          <Checkbox checked readOnly>
            Checkbox
          </Checkbox>

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </FormGroup>
        </Panel>
      </PanelGroup>

    </div>)
  }
}

export default ProductsFilters