import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

function LoginModal(props) {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const [wrongCred, setCred] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		const email = window.localStorage.getItem('email');
		const password = window.localStorage.getItem('password');

		const success = () => {
			window.localStorage.setItem('isLogedIn', true);
			props.handleClose();
		};
		const fail = () => {
			setCred(true);
			setFormData({
				password: '',
			});
		};

		email === formData.email && password === formData.password
			? success()
			: fail(e);
	}
	return (
		<Modal
			show={props.show}
			onHide={props.handleClose}
			dialogClassName='modal-overide'
			centered
		>
			<Modal.Body>
				<Modal.Title className='text-overide'>
					<strong>Login</strong>
				</Modal.Title>
				<br />
				<Form onSubmit={(e) => handleSubmit(e)}>
					<Form.Group className='mb-3' controlId='Email'>
						<Form.Control
							type='email'
							placeholder='Email'
							name='email'
							className='input-overide'
							value={formData.email}
							onChange={(e) => handleChange(e)}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='Password'>
						<Form.Control
							type='password'
							placeholder='Password'
							name='password'
							className='input-overide'
							value={formData.password}
							onChange={(e) => handleChange(e)}
						/>
					</Form.Group>
					<div className='d-grid gap-2 my-3'>
						<Button variant='danger' className='bg-overide' type='submit'>
							Login
						</Button>
					</div>
					<Alert
						variant='danger'
						style={wrongCred ? { display: 'block' } : { display: 'none' }}
					>
						Wrong email and password combination
					</Alert>
					<p className='text-center'>
						Don't have an account ? Click{' '}
						<span onClick={props.switchModal}>
							<strong>Here</strong>
						</span>
					</p>
				</Form>
			</Modal.Body>
		</Modal>
	);
}

export default LoginModal;
