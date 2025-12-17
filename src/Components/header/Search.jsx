import { useContext, useState } from "react";
import search from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setLocation } = useContext(LocationContext);

  const handleSearch = () => {
    const locationFetch = getLocationByName(searchTerm);
    console.log(locationFetch);
    setLocation({ ...locationFetch });
  };

  return (
    <div>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button onClick={handleSearch} type="submit">
          <img src={search} alt="searchSvg" />
        </button>
      </div>
    </div>
  );
};

export default Search;
