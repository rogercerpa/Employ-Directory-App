import React from 'react';

export function EmployeesTable({ name, image, email, DOB }) {
	return (
		<tbody>
			<tr>
				<th scope="row">1</th>
				<td>{image}</td>
				<td>{name}</td>
				<td>{email}</td>
				<td>{DOB}</td>
			</tr>
		</tbody>
	);
}
