import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import DisplayData from "../component/DisplayData.js";
import "../Style/movieD.css";

function MoiveD() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function getData() {
      const response = await fetch(`/api/movies/${id}`);
      const payload = await response.json();
     
      setMovie(payload.data);
    }
    getData();
  }, []);

  return (
    <div className="movieD">
      <div className="fixedLink">
        <Link to="/">
          <img src="https://img.icons8.com/external-doodle-bomsymbols-/344/external-arrow-doodle-web-design-device-set-2-doodle-bomsymbols-.png" height="30" />
        </Link>
      </div>
      <div className="movieD__top">
        <h2> Title :  {movie?.original_title}</h2>

        <div className="subHeading">
          <p>
            <b> Status : </b> {movie?.status}
          </p>
          <p>
            {" "}
            <b> Release Date : </b> {movie?.release_date}
          </p>
        </div>
      </div>
      <div className="other__movieD">
        <p>
          <b> Runtime :</b> {movie?.runtime} min
        </p>
        <p>
          <b> Rating :</b> ❇️ {movie?.vote_average} / 10
        </p>
        <p>
          <b> Vote Count :</b> {movie?.vote_count}
        </p>
      </div>

      <div className="movieD__main">
        <DisplayData
          title="Tagline"
          value={movie?.tagline ? movie.tagline : "None"}
          col
        />
        <DisplayData
          title="Description"
          value={movie?.overview ? movie.overview : "None"}
          col
        />
      </div>
    </div>
  );
}

export default MoiveD;
