import React from 'react';



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
     <div className="row col-lg-4">
      <ul class="list-group">
    <li class="list-group-item" align= "left">{results}</li>
     </ul>
      </div>
         ); 
}

export default ResultList;
