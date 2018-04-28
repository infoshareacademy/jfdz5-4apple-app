import React from 'react'

import './ButtonBlue.css'

const ButtonBlue = ({textContent, type}) => {
  return (
    <button type={type}
            className="button--primary">
      {textContent}
    </button>
  )
};

export default ButtonBlue
