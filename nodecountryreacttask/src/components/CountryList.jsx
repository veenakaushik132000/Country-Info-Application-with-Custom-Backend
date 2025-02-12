import React from "react";
import CountryCard from "./CountryCard";

function CountryList({ countries }) {
  return (
    <div >
      {countries.length === 0 ? (
        <p>No countries found. Try a different search.</p>
      ) : (
        countries.map((country) => <CountryCard key={country.code} country={country} />)
      )}
    </div>
  );
}

export default CountryList;
