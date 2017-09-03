import React from 'react'

import './ButtonBlue.css'
import {Button} from "react-bootstrap";

const ButtonBlue = ({textContent}) => {
  return (
    <Button bsSize="large"
            bsStyle="primary"
            className="button--continue">
      {textContent}
    </Button>
  )
}

export default ButtonBlue