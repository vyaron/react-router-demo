import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import ItemService from '../services/ItemService'


export default class Home extends Component {
  
  state = {items :[]}

  componentDidMount() {
    ItemService.getItems()
      .then(items => 
              this.setState({items}))
  }
  
  render() {
    var itemChilds = this.state.items.map(item => 
        <li key={item.id}>
          <Link to={`/item/${item.id}`}>{item.name}</Link>
          <Link to={`/item/edit/${item.id}`}>Edit</Link>
        </li>)

    return (
      <div>
        <ul>
          {itemChilds}
        </ul>
      </div>
    )
  }

}

