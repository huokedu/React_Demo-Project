import React, { Component } from 'react';
import axios from 'axios';
import Title from './Title';
import Results from './Results';

class SubmitSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      value: '',
      
      };
    this.handleReset = this.handleReset.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleReset() {
    this.setState({ data: 'reset', value: '' });
    document.getElementsByName("Viewer").location.reload();
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
        <div className="row col-lg-8">
          <input
            className="wiki_query"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          </div>
          <br/><br/>
          <div className="row col-lg-6">
          <button className="btn btn-default mainBtn" type="submit" value="Submit">Search</button>
          <span>
            <button className="btn btn-info reset" onClick={this.handleReset}>X</button>
          </span>
          </div>
        </form>
        <iframe className="row col-lg-8"name="Viewer" scrolling="auto" height="800px" width="600px" ></iframe>
        <Results searchString={this.state.data} />
        
      </div>
    );
  }
}

export default SubmitSearch;
