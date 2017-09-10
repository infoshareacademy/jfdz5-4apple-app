import React from 'react'
import {connect} from "react-redux";
import {Checkbox, ControlLabel, FormControl, FormGroup, Panel, PanelGroup} from "react-bootstrap";

import ButtonBlue from "./ButtonBlue";

const ShoesFilters = (props) => {
  const results = props.filteredResults
  return (
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
          <Checkbox >Męskie
          </Checkbox>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Rozmiar</ControlLabel>
            <FormControl componentClass="select" placeholder="Wybierz rozmiar">
              {}
              <option value="select">Wybierz rozmiar</option>
              {results && results.reduce((product, nextProduct) => {
                console.log('pierwszy', product, 'drugi', nextProduct)
                return product.size.concat(nextProduct.size)
              },[]).map((size, index) => {
                return <option key={index} value={size}>{size}</option>
              })}
            </FormControl>
            <FormControl componentClass="select" placeholder="Wybierz rozmiar">
              {}
              <option value="select">Wybierz kolor</option>
              {results.reduce((product, nextProduct) => {
                return product.color.concat(nextProduct.color)
              },[]).map((color, index) => {
                return <option key={index} value={color}>{color}</option>
              })}
            </FormControl>
            <ButtonBlue textContent="Filtruj"/>
          </FormGroup>
        </form>
      </Panel>
    </PanelGroup>
  )
}

export default connect(
  state => ({
    filteredResults: state.searching.filteredResults
  })
)(ShoesFilters)
