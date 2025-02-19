import ReactStars from "react-stars";
const MovieItem = ({ movie, onRateMovie, onToggleWatched, onDeleteMovie }) => {
  const ratingChanged = (newRating) => {
    onRateMovie(movie.id, newRating);
  };

  return (
    <li className="bg-slate-900 text-white p-3 mb-3 rounded-lg">
      <span className=" flex items-center gap-2">
        <span
          className={` ${
            movie.watched ? " text-gray-400 line-through " : "text-white"
          }`}
        >
          {movie.title} on {movie.ott}{" "}
          {movie?.rating ? `⭐ ${movie.rating}/5` : ""}
        </span>
        <small className=" flex gap-2">
          <ReactStars
            count={5}
            value={movie.rating}
            onChange={ratingChanged}
            size={24}
            color2={"#ffd700"}
          />
        </small>
        <button
          onClick={() => onToggleWatched(movie.id)}
          className={` w-auto h-auto px-3 py-1 ${
            movie.watched ? "bg-green-500" : "bg-blue-500"
          } rounded-full text-white transition-all duration-300`}
        >
          {movie.watched ? "Watched" : " UnWatched"}
        </button>
        <button
          onClick={() => onDeleteMovie(movie.id)}
          className="w-auto h-auto px-3 py-1 bg-red-500 rounded-full text-white transition-all duration-300"
        >
          Remove
        </button>
      </span>
    </li>
  );
};

export default MovieItem;
