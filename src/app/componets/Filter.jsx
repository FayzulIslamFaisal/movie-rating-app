const Filter = ({ filterData, setFilterData }) => {
  const filterOptions = ["All", "Watched", "UnWatched", "Rating"];
  return (
    <ul className="flex items-center gap-3 justify-center mt-4">
      {filterOptions.map((optionItem, index) => {
        return (
          <li key={index}>
            <button
              onClick={() => {
                setFilterData(optionItem);
              }}
              className={`border px-4 py-1 text-center capitalize rounded 
                    ${
                      filterData === optionItem
                        ? "bg-green-600 text-white"
                        : "bg-slate-800 text-white"
                    }
                `}
            >
              {optionItem}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Filter;
