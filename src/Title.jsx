import React, { Component } from 'react';

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Wikipdeia Article Search',
    };
  }

  render() {
    setTimeout(() => {
      this.setState({ title: 'Enter Article to Search: ' });
    }, 1500);
    return (
      <h2>{this.state.title}</h2>
    );
  }
}

export default Title;
