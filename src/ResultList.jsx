import React from 'react';
import './app.css';



function ResultList(props) {
  console.log(props.searchString);
  const results = props.searchString[1].map((result, index) => {
    
    return (
      <div key={index}>
      <a href={props.searchString[3][index]} target="Viewer" > 
          <h3>{props.searchString[1][index]}</h3>
      </a>
      <p>{props.searchString[2][index]}</p>
       </div>
    );
  });

   return ( 

  <div class="container-fluid" align="left">
  <div class="row content">
    <div class="col-sm-4 sidenav">
      <h4>Search Results</h4>
      <ul class="nav nav-pills nav-stacked">
        <li>{results}</li>
        
      </ul><br/>>
      </div>
      </div>
      </div>
     
       ); 
}

export default ResultList;
