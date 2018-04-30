import React from 'react'

import './LogoText.css'

class LogoText extends React.Component {
  render() {
    return (
        <a className={'logo-link'} href='#'>
          <h1 className={`logo-text--${this.props.size || 'normal'}`}>price.less.pl</h1>
        </a>
    )
  }
}

export default LogoText