import React, { Component } from 'react';
import axios from 'axios';
import Title from './Title';
import Results from './Results';

class SubmitSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      value: ''
      };
    this.handleReset = this.handleReset.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleReset() {
    this.setState({ data: 'reset', value: '' });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
   
    this.axiosStart();
    event.preventDefault();
  }

  axiosStart() {
    const wikiApiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=';
    const wikiApiUrlQuery = wikiApiUrl + this.state.value;
    if (this.state.value === '') {
      return this.handleReset();
    }
    return axios.get(wikiApiUrlQuery)
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        this.setState({ data: 'error' });
      });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <Title />
          <input
            className="wiki_query"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
          <button className="btn btn-default mainBtn" type="submit" value="Submit">Search</button>
          <div>
            <button className="btn btn-info reset" onClick={this.handleReset}>X</button>
          </div>
        </form>
        <Results searchString={this.state.data} />
      </div>
    );
  }
}

export default SubmitSearch;
