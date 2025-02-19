"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import MovieFrom from "./MovieFrom";
import MovieList from "./MovieList";
import Filter from "./Filter";

const MovieWatch = () => {
  const [movies, setMovies] = useState([]);
  const [filterMenu, setFilterMenu] = useState("All");

  const addMovie = (movieData) => {
    const newMovie = {
      id: crypto.randomUUID(),
      title: movieData.title,
      ott: movieData.ott,
      rating: null,
      watched: false,
    };
    setMovies([...movies, newMovie]);
    console.log([...movies, newMovie]); // Ensure latest state logs correctly
  };
  const onRateMovie = (id, rating) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === id ? { ...movie, rating } : movie
    );

    setMovies(updatedMovies);
  };
  const onToggleWatched = (id) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === id ? { ...movie, watched: !movie.watched } : movie
    );
    setMovies(updatedMovies);
  };
  const onDeleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  // Filtering logic
  const filteredMovies = movies.filter((movie) => {
    if (filterMenu === "Watch") return movie.watched;
    if (filterMenu === "Unwatch") return !movie.watched;
    if (filterMenu === "Ratings") return movie.rating !== null;
    return true;
  });

  return (
    <div className="my-20 max-w-[550px] mx-auto bg-slate-400 p-4">
      <Heading />
      <MovieFrom addMovie={addMovie} />
      <Filter filterMenu={filterMenu} setFilterMenu={setFilterMenu} />
      <MovieList
        movies={filteredMovies}
        onRateMovie={onRateMovie}
        onToggleWatched={onToggleWatched}
        onDeleteMovie={onDeleteMovie}
      />
    </div>
  );
};

export default MovieWatch;
