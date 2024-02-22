import { useEffect, useState } from "react";

type Tprops = {
  country: string;
  handleSelectChange: any;
};

function CountrySelector({ country, handleSelectChange }: Tprops) {
  const [countries, setCountries] = useState<
    { value: string; label: string }[]
  >([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data?.countries);
        // setSelectedCountry(data.userSelectValue);
      });
  }, []);

  return (
    // <Select
    // name='country'
    // 	options={countries}
    // 	onChange={handleSelectChange}
    //  className="w-full md:w-1/2 focus:outline-gray-400 py-2 focus:outline-none mb-3"
    // />
    <select
      name="country"
      onChange={handleSelectChange}
      className={`py-3.5 pl-3 rounded-md border focus:outline-gray-400 w-full ${
        !country && "text-gray-400"
      } cursor-pointer`}
    >
      <>
        <option defaultChecked>country</option>
        {countries?.map((country, i) => (
          <option key={i} value={country.label}>
            {country.label}
          </option>
        ))}
      </>
    </select>
  );
}

export default CountrySelector;
