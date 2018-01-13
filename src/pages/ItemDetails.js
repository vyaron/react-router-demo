import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import ItemService from '../services/ItemService'

export default class ItemDetails extends Component {
  
  state = {item : {}}
  
  componentDidMount(){
    ItemService
      .getItemById(this.props.itemId)
      .then(item => {
        this.setState({item})
      })
  }
  
  
  render(props) {
    
    return (
      <div>
        <h1>{this.state.item.name}</h1>
        <Link to="/">Back</Link>
      </div>
    )
  }

}

