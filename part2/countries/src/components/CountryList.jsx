const CountryList = ({ countries, setQuery }) => {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name.common} className="listed-country">
          {country.name.common}
          <button type="button" onClick={() => setQuery(country.name.common)}>
            Show
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
