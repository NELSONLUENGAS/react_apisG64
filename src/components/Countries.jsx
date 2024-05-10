import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Countries = ({ countries, setCountries, filteredCountries }) => {
	const api_url = 'https://restcountries.com/v3.1/all';

	const fetchData = async () => {
		const { data } = await axios.get(api_url);
		const countries = data;
		let countriesClean;

		if (Array.isArray(countries)) {
			countriesClean = countries.map(
				({ name: { official }, region, flags: { png }, capital }) => {
					const newDataCountry = {
						name: official,
						region: region,
						flag: png,
						capital: capital?.length ? capital[0] : 'NO tiene capital',
					};

					return newDataCountry;
				}
			);

			setCountries(countriesClean);
		} else {
			console.log('No data found');
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<div className="row">
				{filteredCountries.length ? (
					filteredCountries.map((country, key) => (
						<div
							key={key}
							className="col"
						>
							<Card style={{ width: '18rem' }}>
								<Card.Img
									variant="top"
									src={country.flag}
								/>
								<Card.Body>
									<Card.Title>{country.name}</Card.Title>
									<Card.Text>{country.capital}</Card.Text>
									<Button variant="primary">Ver detalle</Button>
								</Card.Body>
							</Card>
						</div>
					))
				) : countries.length ? (
					countries.map((country, key) => (
						<div
							key={key}
							className="col"
						>
							<Card style={{ width: '18rem' }}>
								<Card.Img
									variant="top"
									src={country.flag}
								/>
								<Card.Body>
									<Card.Title>{country.name}</Card.Title>
									<Card.Text>{country.capital}</Card.Text>
									<Button variant="primary">Ver detalle</Button>
								</Card.Body>
							</Card>
						</div>
					))
				) : (
					<h1>No data found</h1>
				)}
			</div>
		</>
	);
};

Countries.propTypes = {};
