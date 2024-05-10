import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const Search = ({ countries, setFilteredCountries }) => {
	const handleSort = (typeSort) => {
		if (typeSort === 'asc') {
			const countriesSorted = [...countries].sort((country_1, country_2) =>
				country_1.name.localeCompare(country_2.name)
			);

			setFilteredCountries(countriesSorted);
		} else {
			const countriesSorted = [...countries].sort((country_1, country_2) =>
				country_2.name.localeCompare(country_1.name)
			);

			setFilteredCountries(countriesSorted);
		}
	};

	const handleChange = (event) => {
		const value = event.target.value;

		const dataFiltered = countries.filter((country) =>
			Object.values(country).some((countryData) =>
				countryData.toLowerCase().includes(value)
			)
		);

		setFilteredCountries(dataFiltered);
	};

	return (
		<>
			<div className="row">
				<div className="col-8">
					<InputGroup className="mb-3">
						<InputGroup.Text id="basic-addon1">👻</InputGroup.Text>
						<Form.Control
							onChange={handleChange}
							type="search"
							placeholder="Search here ..."
							aria-label="Username"
							aria-describedby="basic-addon1"
						/>
					</InputGroup>
				</div>
				<div className="col-4">
					<Form.Select
						aria-label="Default select example"
						onChange={(event) => handleSort(event.target.value)}
					>
						<option defaultChecked>Filter data</option>
						<option value="asc">ASC</option>
						<option value="desc">DESC</option>
					</Form.Select>
				</div>
			</div>
		</>
	);
};

Search.propTypes = {};
