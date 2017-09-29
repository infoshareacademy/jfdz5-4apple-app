import React from 'react'

import ButtonBlue from "./ButtonBlue";
import {Panel, PanelGroup} from "react-bootstrap";
import "./Filters.css"
import Filters from "./Filters";

const SearchBarFilters = () => {
  return (
    <div><PanelGroup defaultActiveKey="1" accordion>
      <Panel header={"Szczegóły wyszukiwania"} eventKey="1">
        <form className="container">
          <Filters/>
          <ButtonBlue textContent="Filtruj"/>
        </form>
      </Panel>
    </PanelGroup>

    </div>
  )
}
export default (SearchBarFilters)
