import React from 'react';

export default class GiftListContainer extends React.Component {
  this.state = {
    
  }
  
  componentDidMount(){
    fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=mIuSfstFtNcWfvBo9cjiaDeIf6YltBOU&rating=g')
    .then(resp => resp.json())
    .then(data => {
      
    })
  }
}