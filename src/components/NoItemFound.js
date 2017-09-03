import React from 'react'

import './NoItemFound.css'

const NoItemFound = () => {
  return (
    <div>
              <span className="no-items-found no-items-found--message">
                  Wygląda na to, że nie mamy tego, czego szukasz.
              </span>
      <span className="no-items-found no-items-found--advice">
                  Spróbuj zmienić zapytanie albo poszukaj w kategoriach.
              </span>
    </div>
  )
}

export default NoItemFound