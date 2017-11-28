import React, { Component } from 'react';

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorInfo: 'Nothing found for your query. Please try another search.',
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.errorInfo}</p>
      </div>
    );
  }
}

export default Error;
