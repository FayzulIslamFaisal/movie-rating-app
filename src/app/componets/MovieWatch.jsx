"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import MovieFrom from "./MovieFrom";

const MovieWatch = () => {
  const [movies, setMovies] = useState([]);
  const addMovie = () => {};
  return (
    <div className="my-20 max-w-[550px] mx-auto bg-slate-400 p-4">
      <Heading />
      <MovieFrom addMovie={addMovie} />
    </div>
  );
};

export default MovieWatch;
