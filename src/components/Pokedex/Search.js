import React from "react";

const Search = () => {
  return (
    <div>
      <form>
        <input placeholder="Search Pokemon" className="blue-buttons"></input>
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
