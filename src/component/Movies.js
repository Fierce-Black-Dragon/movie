import React from "react";
import "../Style/component.css";
import { Link } from "react-router-dom";

// , { useState, useEffect }

function Movie({ title, status, vote_average, id }) {
  const path = `movie/${id}`;
  return (
    <Link to={path}>
      <div className="movie">
        <h4> {title}</h4>
        <p> {status}</p>

        <p>
          Rating : <b>❇️{vote_average}</b> /10{" "}
        </p>
      </div>
    </Link>
  );
}

export default Movie;
