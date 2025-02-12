import React from "react";

function CountryDetail({ country }) {
  return (
    <div >
      <img src={country.flag} alt={`${country.name} Flag`} width={50} />
      <h2>{country.name}</h2>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(", ")}</p>
      <p><strong>Currencies:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(", ")}</p>
    </div>
  );
}

export default CountryDetail;
