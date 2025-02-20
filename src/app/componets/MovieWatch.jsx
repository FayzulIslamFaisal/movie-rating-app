"use client";

import Heading from "./Heading";
import MovieFrom from "./MovieFrom";
import MovieList from "./MovieList";
import Filter from "./Filter";
import { useState } from "react";
import MovieSearch from "./MovieSearch";

const MovieWatch = () => {
  const [allFormDatas, setAllFormDatas] = useState([]);
  const [filterData, setFilterData] = useState("All");
  const [editData, setEditData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // function for AddNeFormData
  const onAddNewFormData = (formData) => {
    if (editData.id) {
      const editInfo = allFormDatas.map((editItem) =>
        editItem.id === editData.id
          ? { ...editItem, title: formData.title, ott: formData.ott }
          : editItem
      );
      setAllFormDatas(editInfo);
      setEditData({});
    } else {
      const newData = {
        id: crypto.randomUUID(),
        title: formData.title,
        ott: formData.ott,
        ratings: null,
        watched: false,
      };
      setAllFormDatas([...allFormDatas, newData]);
    }
  };

  // function for onHandleDelete
  const onHandleDelete = (itemId) => {
    const deleteData = allFormDatas.filter(
      (movieItem) => movieItem.id !== itemId
    );
    setAllFormDatas(deleteData);
  };

  // function for onWatchedToggle
  const onWatchedToggle = (itemId) => {
    const toggle = allFormDatas.map((toggleItem) => {
      return toggleItem.id === itemId
        ? { ...toggleItem, watched: !toggleItem.watched }
        : toggleItem;
    });
    setAllFormDatas(toggle);
  };

  // function for onRatingHandle
  const onRatingHandle = (itemId, newRating) => {
    const upDateRating = allFormDatas.map((ratingItem) => {
      return ratingItem.id === itemId
        ? { ...ratingItem, ratings: newRating }
        : ratingItem;
    });
    setAllFormDatas(upDateRating);
  };

  //  apply the search filter
  const searchResults = allFormDatas.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //  Then apply the filter on the search results
  const updatedFilter = searchResults.filter((item) => {
    if (filterData === "All") return true;
    if (filterData === "Watched") return item.watched;
    if (filterData === "UnWatched") return !item.watched;
    if (filterData === "Rating") return item.ratings !== null;
    return true;
  });

  // function for onHandleEdit
  const onHandleEdit = (itemId) => {
    const editItem = allFormDatas.find((editItem) => editItem.id === itemId);
    if (editItem) {
      setEditData({ ...editItem });
    }
  };

  console.log("searchTer---", searchTerm);

  return (
    <div className="my-20 max-w-[650px] mx-auto bg-slate-400 p-4">
      <Heading />
      <MovieFrom onAddNewFormData={onAddNewFormData} editData={editData} />
      <MovieSearch searchTer={searchTerm} setSearchTer={setSearchTerm} />
      <Filter setFilterData={setFilterData} filterData={filterData} />
      <MovieList
        allFormDatas={updatedFilter}
        onHandleDelete={onHandleDelete}
        onWatchedToggle={onWatchedToggle}
        onRatingHandle={onRatingHandle}
        onHandleEdit={onHandleEdit}
      />
    </div>
  );
};

export default MovieWatch;
