import React, { Component } from 'react';

class Error  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorInfo: 'No results found!',
    };
  }

  render() {
    return (
      

        <div>
        <strong>{this.state.errorInfo}</strong> 
        </div>
    );
  }
}

export default Error;
