import React from 'react'
import { createDetailsList } from "./_utils/filtersDetails";


class CategoriesItem extends React.Component {

  render() {
    return (
      <ul className="list-group-item categories__item" onClick={() => {
      }}>
        <a>{this.props.category}</a>
        {
          createDetailsList(this.props.items, 'author').toString() === "" ?

            createDetailsList(this.props.items, 'brand').map((item, index) => {
              return <li className={'categories__brand'} key={index}><a>{item}</a></li>
            })
            :
            createDetailsList(this.props.items, 'author').map((item, index) => {
              return <li className={'categories__brand'} key={index}><a>{item}</a></li>
            })
        }
      </ul>
    )
  }
}

export default CategoriesItem