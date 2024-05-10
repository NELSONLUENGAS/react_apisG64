import { useEffect, useState } from 'react';
import './App.css';
import { Countries } from './components/Countries';
import { Search } from './components/Search';

function App() {
	const [countries, setCountries] = useState([]);
	const [filteredCountries, setFilteredCountries] = useState([]);

	const handleSort = (countriesFiltered) => {
		setFilteredCountries(countriesFiltered);
	};

	return (
		<>
			<Search
				countries={countries}
				setFilteredCountries={handleSort}
			/>
			<Countries
				countries={countries}
				setCountries={setCountries}
				filteredCountries={filteredCountries}
			/>
		</>
	);
}

export default App;
