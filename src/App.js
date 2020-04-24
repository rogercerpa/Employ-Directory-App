import React from 'react';

import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Employees from './components/Employees';

function App() {
	return (
		<div>
			<Navbar />
			<SearchBar />
			<Employees />
		</div>
	);
}

export default App;
