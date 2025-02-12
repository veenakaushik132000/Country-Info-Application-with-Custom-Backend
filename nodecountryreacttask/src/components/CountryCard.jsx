import React from "react";
import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <div>
      <img src={country.flag} alt={`${country.name} Flag`} width={50}/>
      <h3>{country.name}</h3>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <Link to={`/country/${country.code}`} >View Details</Link>
    </div>
  );
}

export default CountryCard;
