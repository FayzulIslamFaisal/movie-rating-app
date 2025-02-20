const MovieSearch = ({ searchTer, setSearchTer }) => {
  return (
    <div className="py-5">
      <form>
        <div className="">
          <input
            type="search"
            className=" w-full px-4 py-2 outline-none border "
            placeholder="Search Your Movie..."
            name="search"
            value={searchTer}
            onChange={(e) => setSearchTer(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default MovieSearch;
