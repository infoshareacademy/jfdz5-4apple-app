import React from 'react'

import './ButtonBlue.css'
import {Button} from "react-bootstrap";

const ButtonBlue = ({textContent, type}) => {
  return (
    <Button type={type}
            bsSize="large"
            bsStyle="primary"
            className="button--continue">
      {textContent}
    </Button>
  )
}

export default ButtonBlue
