import React from 'react';

export default class GifSearch extends React.Component {
  
  state ={
    username: '',
    password: ''
  }
  
  
  render(){
    return (
      <form onSubmit={this.props.handleSubmit}>
      <input type="text" value={this.state.username}/>
      </form>
      )
  }
}