import React from 'react';
import './style.css';

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBar(props) {
	return (
		<form className="search">
			<div className="form-group">
				<label htmlFor="breed">Search by Name:</label>
				<input
					value={props.search}
					onChange={props.handleInputChange}
					name="breed"
					list="breeds"
					type="text"
					className="form-control"
					placeholder="Search"
					id="breed"
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
