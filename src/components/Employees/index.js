import React, { Component } from 'react';
import API from '../../utils/API';
import EmployeesTable from '../EmployeesTable';
import SearchBar from '../SearchBar';

// employeeList = query =>{
// 	API.search(query)

// };

class Employees extends Component {
	state = {
		result : [],
		search : ''
	};
	componentDidMount() {
		this.employeeList();
	}

	employeeList = (query) => {
		API.getRandomEmployee(query)
			.then((res) => this.setState({ result: res.data }))
			.catch((err) => console.log(err));
	};

	handleInputChange = (event) => {
		this.setState({
			search : event.target.value
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		API.getEmployee(this.state.search);
	};

	render() {
		return (
			<div>
				<SearchBar
					value={this.state.search}
					handleInputChange={this.handleInputChange}
					handleFormSubmit={this.handleInputChange}
				/>
				<EmployeesTable results={this.state.result} />
			</div>
		);
	}
}

export default Employees;
