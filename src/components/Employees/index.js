import React, { Component } from 'react';
import API from '../../utils/API';
import EmployeesTable from '../EmployeesTable';

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

	render() {
		return (
			<div>
				<EmployeesTable results={this.state.result} />
			</div>
		);
	}
}

export default Employees;
