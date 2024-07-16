const CountryList = ({ countries, setQuery }) => {
  return (
    <ul>
      {countries.map((country) => (
        <>
          <li className="listed-country" key={country.tld}>
            {country.name.common}
            <button type="button" onClick={() => setQuery(country.name.common)}>
              Show
            </button>
          </li>
        </>
      ))}
    </ul>
  );
};

export default CountryList;
