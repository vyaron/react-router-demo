import React, { Component } from 'react';
import {Link, Prompt} from 'react-router-dom'

import ItemService from '../services/ItemService'

export default class ItemEdit extends Component {
  
  state = {dirty: false, item : {name: ''}}
  
  componentDidMount(){
    if (!this.props.itemId) return;
    ItemService
      .getItemById(this.props.itemId)
      .then(item => {
        this.setState({item})
      })
  }
  
  whenInput = (ev) => {
    var updteadItem = {...this.state.item, ...{name: ev.target.value}}
    console.log(updteadItem);
    this.setState({dirty:true, item : updteadItem});
  }

  saveItem =(ev) => {
    ev.preventDefault();
    ItemService.saveItem(this.state.item)
  }

  render(props) {
    const item = this.state.item
    return (
      <form onSubmit={this.saveItem}>
        <h1>{item.name}</h1>
        <input type="text" value={item.name} onInput={this.whenInput}/>
        <button>Save</button>
        <Link to="/">Back</Link>
        <Prompt when={this.state.dirty} message="Sure Baba?"/>
      </form>
    )
  }

}

