import React from 'react'

import './NoItemFound.css'

const NoItemFound = () => {
  return (
    <div className={'no-items-found__container'}>
              <span className="no-items-found no-items-found__message">
                  Wygląda na to, że nie mamy tego, czego szukasz.
              </span>
      <span className="no-items-found no-items-found__advice">
                  Spróbuj zmienić zapytanie albo poszukaj w kategoriach.
              </span>
    </div>
  )
}

export default NoItemFound