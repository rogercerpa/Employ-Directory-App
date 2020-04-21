import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Employees from './components/Employees';

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<SearchBar />
				<Employees />
			</div>
		</Router>
	);
}

export default App;
