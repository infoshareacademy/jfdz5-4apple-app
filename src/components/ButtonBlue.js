import React from 'react'

import './ButtonBlue.css'

const ButtonBlue = ({textContent, type, helperClass}) => {
  return (
    <button type={type}
            className={`button--primary ${helperClass}`}>
      {textContent}
    </button>
  )
};

export default ButtonBlue
