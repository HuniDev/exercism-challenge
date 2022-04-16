import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';
import Head from './components/Head';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
	const [test, setTest] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(10);

	const fetchData = async () => {
		Promise.all([
			setLoading(true),
			axios.get('https://exercism.org/api/v2/hiring/testimonials'),
			axios.get('https://exercism.org/api/v2/tracks'),
		])
			.then(res => {
				const data = res[1].data.testimonials.results;
				setTest(data);
				setLoading(false);
			})

			.catch(error => {
				console.log(error);
				setError(error);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);
	console.log(test);
	return (
		<div>
			<Navbar />
			<Head />
			<Table />
		</div>
	);
}

export default App;
