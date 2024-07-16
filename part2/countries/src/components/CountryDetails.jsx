import { useState, useEffect } from "react";
import axios from "axios";

const CountryDetails = ({ country, query }) => {
  const [temp, setTemp] = useState(null);
  const [condition, setCondition] = useState(null);
  const [wind, setWind] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=05e5e7a67d664fe6bcf202205242806&q=${country.name.common}`
      )
      .then((response) => {
        const current = response.data.current;
        setTemp(current.temp_c);
        setCondition(current.condition.icon);
        setWind(current.wind_kph);
      });
  }, [query, country.name.common]);

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <br />
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="" />
      <br />
      <h3>Weather in {country.capital[0]}:</h3>
      <p>{temp}&deg;C</p>
      <img src={condition} alt="Condition Icon" />
      <p>Wind: {wind}kph</p>
    </>
  );
};

export default CountryDetails;
