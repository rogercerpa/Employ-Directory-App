import React, { Component } from 'react';
import API from '../../utils/API';

// employeeList = query =>{
// 	API.search(query)

// };

class Employees extends Component {
	state = {
		result : {},
		search : ''
	};
	componentDidMount() {
		this.employeeList();
	}

	employeeList = (query) => {
		API.getRandomEmployee(query)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};
	// this.setState({ result: res.data })
	render() {
		return (
			<div>
				<table className="table">
					<thead className="thead-dark">
						<tr>
							<th scope="col">Image</th>
							<th scope="col">Name</th>
							<th scope="col">Phone</th>
							<th scope="col">Email</th>
							<th scope="col">DOB</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>00/00/0000</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
							<td>00/00/0000</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>Larry</td>
							<td>the Bird</td>
							<td>@twitter</td>
							<td>00/00/0000</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Employees;
