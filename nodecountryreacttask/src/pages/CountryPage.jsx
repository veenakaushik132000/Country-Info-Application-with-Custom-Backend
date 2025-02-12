import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountryDetails } from "../redux/slices/countrySlice";
import { useParams } from "react-router-dom";
import CountryDetail from '../components/CountryDetail'

function CountryPage() {
  const { code } = useParams();
  const dispatch = useDispatch();
  const { countryDetail, loading } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountryDetails(code));
  }, [dispatch, code]);

  if (loading) return <p>Loading...</p>;
  if (!countryDetail) return <p>Country not found</p>;

  return <CountryDetail country={countryDetail} />;
}

export default CountryPage;
