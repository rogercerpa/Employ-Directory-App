import React from 'react';
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">Welcome to your Employee Directory</h1>
				<p className="lead">
					Click on carrot to filter by heading or use the search box to narrow
					your results.
				</p>
			</div>
		</div>
	);
}

export default Navbar;
