import React from 'react'

import ShoesFilters from "./ShoesFilters";
import ButtonBlue from "./ButtonBlue";
import {Panel, PanelGroup} from "react-bootstrap";

const SearchBarFilters = () => {
  return (
    <div><PanelGroup defaultActiveKey="1" accordion>
      <Panel header={"Szczegóły wyszukiwania"} eventKey="1">
        <form className="container">
          <ShoesFilters/>
          <ButtonBlue textContent="Filtruj"/>
        </form>
      </Panel>
    </PanelGroup>

    </div>
  )
}
export default (SearchBarFilters)
