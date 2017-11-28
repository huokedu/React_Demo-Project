import React, { Component } from 'react';
import Error from './Error';
import ResultList from './ResultList';

class Results extends Component {
  render() {
    if ((this.props.searchString === 'reset') || (this.props.searchString === '')) {
      return <div />;
    } else if ((this.props.searchString === 'error')||(this.props.searchString[1].length === 0))  {
      return <Error />;
    } else {
      return <ResultList searchString={this.props.searchString} />;
    }
  }
}

export default Results;
