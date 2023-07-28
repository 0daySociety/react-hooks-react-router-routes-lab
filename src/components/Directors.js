import React from "react";
import { directors } from "../data";

function Directors() {

function directorsMovies(){
  return(
    directors.map((element,index)=>{
      return  (
      <section key={index}>
         <h1>{element.name}</h1>
         <ul>
          {element.movies.map((item,index)=>{
             return <li key={index}>{item}</li>
          })}
         </ul>
      </section>
     )
    })
  )

}
  return (
    <div>
      <h1>Directors Page</h1>
      
      {directorsMovies()}
    </div>
  );
}

export default Directors;
