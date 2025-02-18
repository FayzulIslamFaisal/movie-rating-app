import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies, onRateMovie, onToggleWatched, onDeleteMovie }) => {
  return (
    <div className="mt-5">
      <ul>
        {movies.length === 0 ? (
          <h1 className="text-center ">No movies added yet.</h1>
        ) : (
          movies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              onRateMovie={onRateMovie}
              onToggleWatched={onToggleWatched}
              onDeleteMovie={onDeleteMovie}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default MovieList;
