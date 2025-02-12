import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCountries } from "../redux/slices/countrySlice";

function CountrySearch() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query) {
      dispatch(fetchCountries(query));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search country..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default CountrySearch;
