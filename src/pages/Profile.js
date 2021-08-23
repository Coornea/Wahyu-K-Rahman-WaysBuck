import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function Profile() {
	const fullName = window.localStorage.getItem('Full Name');
	const email = window.localStorage.getItem('email');
	return (
		<Row
			className='mx-auto my-2 justify-content-between'
			style={{ width: '70%' }}
		>
			<Col md={6}>
				<h2 className='text-overide my-4'>My Profile</h2>
				<Row>
					<Col md={5}>
						<Image src='./assets/img/user/Avatar.svg' fluid />
					</Col>
					<Col md={5}>
						<Row className='mb-4'>
							<h4 style={{ color: '#613D2B' }}>Full Name</h4>
							<span>{fullName}</span>
						</Row>
						<Row className=''>
							<h4 style={{ color: '#613D2B' }}>Email</h4>
							<span>{email}</span>
						</Row>
					</Col>
				</Row>
			</Col>
			<Col md={6}>
				<h2 className='text-overide my-4' style={{ color: '#613D2B' }}>
					My Transaction
				</h2>
				<Row>
					<Image src='./assets/img/Transaction.svg' />
				</Row>
			</Col>
		</Row>
	);
}

export default Profile;
