import React from 'react'

import {Checkbox, ControlLabel, FormControl, FormGroup, Panel, PanelGroup} from "react-bootstrap";
import {connect} from "react-redux";

const SearchBarFilters = (props) => {
  const results = props.filteredResults || []
  return (
    <div>
      <PanelGroup defaultActiveKey="1" accordion>
        <Panel header="Sprecyzuj wyszukiwanie" eventKey="1">
          <form>
            <ControlLabel >Cena
              <FormControl type="text" placeholder="od"/>
              -
              <FormControl type="text" placeholder="do"/>
            </ControlLabel>
            <Checkbox >
              Damskie
            </Checkbox>
            <Checkbox >
              Męskie
            </Checkbox>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Rozmiar</ControlLabel>
              <FormControl componentClass="select" placeholder="Wybierz rozmiar">
                {}
                <option value="select">Wybierz rozmiar</option>
                {results.reduce((product, nextProduct,) => {
                  return product.size.concat(nextProduct.size)
                }).map((size, index) => {
                  return <option key={index} value={size}>{size}</option>
                })}
              </FormControl>
              <FormControl componentClass="select" placeholder="Wybierz rozmiar">
                {}
                <option value="select">Wybierz kolor</option>
                {results.reduce((product, nextProduct,) => {
                  return product.color.concat(nextProduct.color)
                }).map((color, index) => {
                  return <option key={index} value={color}>{color}</option>
                })}
              </FormControl>
            </FormGroup>
          </form>
        </Panel>
      </PanelGroup>
    </div>
  )
}
export default connect(
  state => ({
    filteredResults: state.searching.filteredResults
  })
)(SearchBarFilters)
