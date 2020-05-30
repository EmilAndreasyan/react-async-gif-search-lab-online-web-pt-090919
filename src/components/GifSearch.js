import React from 'react';

export default class GifSearch extends React.Component {
  
  
  render(){
    return (
      <form onSubmit={this.props.handleSubmit}>
      <input type="text" value={this.props.state}/>
      </form>
      )
  }
}