import React, { Component } from 'react';

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Welcome!',
    };
  }

  render() {
    setTimeout(() => {
      this.setState({ title: 'Enter Search string!!' });
    }, 5000);
    return (
      <h1>{this.state.title}</h1>
    );
  }
}

export default Title;
