import React, { Component } from 'react';

class Fuli extends Component {
  state = {
    data: []
  };
  
  componentDidMount() {
    fetch("https://gank.io/api/random/data/%E7%A6%8F%E5%88%A9/20").then(res => res.json()).then(data => {
      this.setState({
        data: data.results
      });
    });
    
  }
  
  render() {
    const { data } = this.state;
    
    const result = data.map((entry, index) => {
        return <img key={index} src={entry.url} height="50"></img>;
    });
    
    return result;
  }
}

export default Fuli;