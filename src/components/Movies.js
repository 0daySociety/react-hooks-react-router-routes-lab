import React from "react";
import { movies } from "../data";
import NavBar from "./NavBar";

function Movies() {
  console.log({ movies });

  function films() {
    return movies.map((element, index) => {
      return (
        <section key={index}>
          <h1>{element.title}</h1>
          <p>running  time{element.time}</p>
          <ul>
            {element.genres.map((item,index)=>{
              return (<li key={index}>{item}</li>)
            })}
          </ul>

        </section>
      );
    });
  }



  return <div>
      <h1>Movies Page</h1>
         {films()}
   </div>;
}

export default Movies;
