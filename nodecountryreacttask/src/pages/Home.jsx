import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../redux/slices/countrySlice";
import CountryList from "../components/CountryList";
import LoadingSpinner from "../components/LoadingSpinner";

function Home() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.countries);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchCountries(query));
    }
  };

  return (
    <div>
      <h1>Country Info</h1>
      <div >
        <input
          type="text"
          placeholder="Search country..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{marginBottom:"30px"}}
        />
        <button onClick={handleSearch} style={{marginBottom:"30px"}}>Search</button>
      </div>

      {loading && <LoadingSpinner />}
      <CountryList countries={list} />
    </div>
  );
}

export default Home;
