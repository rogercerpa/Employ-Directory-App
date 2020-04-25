import React from 'react';

function EmployeesTable(props) {
	console.log(props.results);
	return (
		<div>
			<table className="table">
				<thead className="thead-dark">
					<tr>
						<th scope="col">Profile Picture</th>
						<th scope="col">Name</th>
						<th scope="col">GitHub account</th>
						<th scope="col">Email</th>
					</tr>
				</thead>
				<tbody>
					{props.results.map((result) => {
						return (
							<tr>
								<td>
									<img
										src={result.avatar_url}
										atl="profile name"
										style={{ height: 100, width: 100 }}
									/>
								</td>

								<td>{result.login}</td>
								<td>
									<a
										href={result.html_url}
										rel="noopener noreferrer"
										target="_blank"
									>
										Github Account{' '}
									</a>
								</td>
								<td>{result.DOB}</td>
							</tr>
						);
					})}}
				</tbody>
			</table>
		</div>
	);
}
export default EmployeesTable;
