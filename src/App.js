import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';
import Head from './components/Head';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
	const [test, setTest] = useState('');
	const [tracks, setTracks] = useState('');
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);
	const [totalRows, setTotalRows] = useState(0);
	const [perPage, setPerPage] = useState(10);

	useEffect(() => {
		fetchData(1, perPage);
	}, [perPage]);

	const fetchData = async (page, per_page) => {
		Promise.all([
			axios.get('https://exercism.org/api/v2/hiring/testimonials'),
			axios.get('https://exercism.org/api/v2/tracks'),
		])
			.then(response => {
				setTest(response[0].data.testimonials.results);
				setTracks(response[1].data);
				setTotalRows(response.total);
			})

			.catch(error => {
				console.log(error);
			});
	};
	console.log(test);
	return (
		<div className='App'>
			<Navbar />
			<Head />
			<Table />
		</div>
	);
}

export default App;
