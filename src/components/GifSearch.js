import React from 'react';

export default class GifSearch extends React.Component {
  
  state = {
    username: '',
    password: ''
  }
  
  handleChange = event => {
    event.persist()
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  
  render(){
    return (
      <form onSubmit={this.props.handleSubmit}>
      <input type="text" id="username" value={this.state.username} onChange={this.handleChange}/>
      </form>
      )
  }
}