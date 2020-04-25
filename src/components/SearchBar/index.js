import React from 'react';
import './style.css';

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBar(props) {
	return (
		<form className="search">
			<div className="form-group">
				<label htmlFor="employee">Search by name:</label>
				<input
					value={props.value}
					onChange={props.handleInputChange}
					name="employee"
					list="employees"
					type="text"
					className="form-control"
					placeholder="search for an employee"
					id="employee"
				/>
				{/* <datalist id="breeds">
					{props.breeds.map((breed) => <option value={breed} key={breed} />)}
				</datalist> */}
				<button
					type="submit"
					onClick={props.handleFormSubmit}
					className="btn btn-success"
				>
					Search
				</button>
			</div>
		</form>
	);
}

export default SearchBar;
