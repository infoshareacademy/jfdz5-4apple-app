import React from 'react'

import './LogoText.css'

class LogoText extends React.Component {
  render() {
    return (
      <span className={'logo-link'}>
          <h1 className={`logo-text--${this.props.size || 'normal'}`}>price.less.pl</h1>
        </span>
    )
  }
}

export default LogoText