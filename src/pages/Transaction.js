import React from 'react';
import { Button, Table } from 'react-bootstrap';

function Transaction() {
	return (
		<div className='d-block mx-auto' style={{ width: '70%' }}>
			<h2 className='text-overide'>Income Transaction</h2>
			<Table className='mt-4' bordered hover>
				<thead>
					<tr>
						<th>No</th>
						<th>Name</th>
						<th>Address</th>
						<th>Post Code</th>
						<th>Income</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto street</td>
						<td>63120</td>
						<td>Rp 30.000</td>
						<td>Pending</td>
						<td className='d-flex justify-content-evenly'>
							<Button variant='success' size='sm'>
								Approve
							</Button>
							<Button variant='danger' size='sm'>
								Decline
							</Button>
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}

export default Transaction;
