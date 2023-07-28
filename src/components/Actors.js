import React from "react";
import { actors } from "../data";

function Actors() {

function renderActors(){
  return (
   actors.map((element,index)=>{
    return( <section key={index}>
      <h1>{element.name}</h1>
      <ul>
        {element.movies.map((item,index)=>{
          return(<li  key={index}>{item}</li>)
        })}
      </ul>
    </section>)
   }) 
  )
}


  return <div>
    <h1>Actors Page</h1>
    {renderActors()}</div>;
}

export default Actors;
