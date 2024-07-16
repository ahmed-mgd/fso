import { useState, useEffect } from "react";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) =>
        setCountries(
          response.data.filter(
            (country) =>
              country.name.common.toLowerCase().indexOf(query.toLowerCase()) >=
              0
          )
        )
      );
  }, [query]);

  const renderCountries = () => {
    if (countries.length > 10) {
      return <>Too many matches, specify another filter</>;
    } else if (countries.length > 1) {
      return <CountryList countries={countries} setQuery={setQuery} />;
    } else if (countries.length === 1) {
      return <CountryDetails country={countries[0]} query={query} useEffect={useEffect} axios={axios} />;
    } else {
      return <>No matches, specify another filter</>;
    }
  };

  return (
    <>
      <div id="search">
        <label htmlFor="query">Find countries:</label>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <div id="countries-list">{renderCountries()}</div>
    </>
  );
};

export default App;
