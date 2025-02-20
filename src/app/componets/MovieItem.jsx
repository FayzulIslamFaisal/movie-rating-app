import ReactStars from "react-stars";
const MovieItem = ({
  itemData,
  onHandleDelete,
  onWatchedToggle,
  onRatingHandle,
  onHandleEdit,
}) => {
  const ratingChanged = (newRating) => {
    onRatingHandle(itemData.id, newRating);
  };
  return (
    <li className="bg-slate-900 text-white p-3 mb-3 rounded-lg">
      <span className=" flex items-center gap-2">
        <span
          className={`${
            itemData.watched ? "text-gray-400 line-through " : "text-white"
          } 
          `}
        >
          {itemData.title} on {itemData.ott}{" "}
          {itemData?.rating ? `⭐ ${itemData.rating}/5` : ""}
        </span>
        <small className=" flex gap-2">
          <ReactStars
            count={5}
            value={itemData.ratings}
            onChange={ratingChanged}
            size={24}
            color2={"#ffd700"}
          />
        </small>
        <button
          onClick={() => onWatchedToggle(itemData.id)}
          className={`${
            itemData.watched ? "bg-green-500" : "bg-blue-500"
          } w-auto h-auto px-3 py-1 
             
          rounded-full text-white transition-all duration-300`}
        >
          {itemData.watched ? "Watched" : "Unwatch"}
        </button>
        <button
          onClick={() => onHandleDelete(itemData.id)}
          className="w-auto h-auto px-3 py-1 bg-red-500 rounded-full text-white transition-all duration-300"
        >
          Remove
        </button>
        <button
          onClick={() => onHandleEdit(itemData.id)}
          className="w-auto h-auto px-3 py-1 bg-green-500 hover:bg-green-700 rounded-full text-white transition-all duration-300"
        >
          Edit Item
        </button>
      </span>
    </li>
  );
};

export default MovieItem;
