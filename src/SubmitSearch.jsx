import React, { Component } from 'react';
import axios from 'axios';
import Title from './Title';
import Results from './Results';
import './app.css';

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

  <header class="container-fluid">
   <h4>WIKI SEARCH APP </h4> <a className="apilink" href="https://www.mediawiki.org/wiki/API:Main_page">Visit API page</a>
  </header>

  <form onSubmit={this.handleSubmit}>
  <Title />


    <div class="input-group">
     <input
     className="wiki_query"
     type="text"
     placeholder="Enter Search Text"
     value={this.state.value}
     onChange={this.handleChange}
     />
     <br/>
          
     <button className="btn btn-default mainBtn" type="submit" value="Submit">Search</button>
       <span>
       <button className="btn btn-info reset" onClick={this.handleReset}>Reset</button>
        </span>
    </div>
          
  </form>
        
        <div class="row">
        <div class="col-sm-4">  
        <Results searchString={this.state.data} />
        </div>
        <div class="col-sm-7"> 
      <iframe  name="Viewer" scrolling="auto"  ></iframe>
      </div>
      </div>
      </div>
    );
  }
}

export default SubmitSearch;
