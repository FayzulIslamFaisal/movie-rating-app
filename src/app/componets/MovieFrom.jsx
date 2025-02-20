"use client";

import { useEffect, useState } from "react";

const MovieForm = ({ onAddNewFormData, editData }) => {
  const [addFormData, setAddFormData] = useState({
    title: "",
    ott: "",
  });

  useEffect(() => {
    if (editData) {
      setAddFormData({
        title: editData.title || "",
        ott: editData.ott || "",
      });
    }
  }, [editData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddFormData({ ...addFormData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!addFormData.title || !addFormData.ott) {
      console.warn("Please enter requer field");
      return;
    }
    onAddNewFormData(addFormData);
    setAddFormData({ ...addFormData, title: "", ott: "" });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center gap-2"
      >
        <div className="w-[45%]">
          <input
            type="text"
            placeholder="Enter Your Movie Name..."
            className="w-full p-2 border border-gray-300 rounded"
            name="title"
            value={addFormData.title}
            onChange={handleChange}
          />
        </div>
        <div className="w-[30%]">
          <select
            className="w-full p-2 bg-slate-900 text-white border border-gray-300 rounded"
            name="ott"
            value={addFormData.ott}
            onChange={handleChange}
          >
            <option value="">Select On OTT</option>
            <option value="hoichoi">Hoichoi</option>
            <option value="youtube">YouTube</option>
            <option value="amazon">Amazon Prime</option>
            <option value="netflix">Netflix</option>
            <option value="sonylive">SonyLiv</option>
            <option value="hotstar">Hotstar</option>
          </select>
        </div>
        <div className="w-[25%]">
          <button
            type="submit"
            className="w-full p-2 bg-slate-900 text-white border border-gray-300 rounded"
          >
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
