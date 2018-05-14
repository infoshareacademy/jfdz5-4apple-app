import React from 'react'

import './ButtonBlue.css'

const ButtonBlue = ({textContent, type, helperClass, func}) => {
  return (
    <button onClick={func} type={type}
            className={`button--primary ${helperClass}`}>
      {textContent}
    </button>
  )
};

export default ButtonBlue
