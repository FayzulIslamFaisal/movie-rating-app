const Filter = ({ filterMenu, setFilterMenu }) => {
  const options = ["All", "Watch", "Unwatch", "Ratings"];

  return (
    <ul className="flex items-center gap-3 justify-center mt-4">
      {options.map((filter) => (
        <li key={filter}>
          <button
            className={`border px-4 py-1 text-center capitalize rounded ${
              filterMenu === filter
                ? "bg-green-600 text-white"
                : "bg-slate-800 text-white"
            }`}
            onClick={() => setFilterMenu(filter)} 
          >
            {filter}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Filter;
