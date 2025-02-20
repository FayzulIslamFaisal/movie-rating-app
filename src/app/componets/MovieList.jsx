import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({
  allFormDatas,
  onHandleDelete,
  onWatchedToggle,
  onRatingHandle,
  onHandleEdit,
}) => {
  return (
    <div className="mt-5">
      <ul>
        {allFormDatas?.length === 0 ? (
          <h1 className="text-center ">No movies added yet.</h1>
        ) : (
          allFormDatas.map((itemData) => (
            <MovieItem
              itemData={itemData}
              key={itemData.id}
              onHandleDelete={onHandleDelete}
              onWatchedToggle={onWatchedToggle}
              onRatingHandle={onRatingHandle}
              onHandleEdit={onHandleEdit}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default MovieList;
