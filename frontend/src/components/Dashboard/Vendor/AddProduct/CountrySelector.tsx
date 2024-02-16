import Select from "react-select";
import React, { useState, useEffect } from "react";

interface Country {
   value: string;
   label: string;
}

interface CountrySelectorProps {
   selectedCountry: Country;
   setSelectedCountry: React.Dispatch<React.SetStateAction<Country>>;
}

function CountrySelector({ selectedCountry, setSelectedCountry }: CountrySelectorProps) {
	const [countries, setCountries] = useState<Country[]>([]);
	// const [selectedCountry, setSelectedCountry] = useState({});

	useEffect(() => {
		fetch(
			"https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
		)
			.then((response) => response.json())
			.then((data) => {
				setCountries(data.countries);
				setSelectedCountry(data.userSelectValue);
			});
	}, []);

	return (
		<Select
			options={countries}
			value={selectedCountry}
			onChange={(selectedOption) => setSelectedCountry(selectedOption!)}
         className="w-full md:w-1/2 focus:outline-gray-400 py-2 focus:outline-none mb-3"
		/>
	);
}

export default CountrySelector;
