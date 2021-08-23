import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function RegisterModal(props) {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		fullName: '',
	});

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		window.localStorage.setItem('email', formData.email);
		window.localStorage.setItem('password', formData.password);
		window.localStorage.setItem('Full Name', formData.fullName);
		setFormData({
			email: '',
			password: '',
			fullName: '',
		});
		props.handleClose();
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
					<strong>Register</strong>
				</Modal.Title>
				<br />
				<Form onSubmit={(e) => handleSubmit(e)}>
					<Form.Group className='mb-3' controlId='Email'>
						<Form.Control
							type='email'
							name='email'
							placeholder='Email'
							value={formData.email}
							onChange={(e) => handleChange(e)}
							className='input-overide'
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='Password'>
						<Form.Control
							type='password'
							name='password'
							placeholder='Password'
							value={formData.password}
							onChange={(e) => handleChange(e)}
							className='input-overide'
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='FullName'>
						<Form.Control
							type='text'
							name='fullName'
							placeholder='Full Name'
							value={formData.fullName}
							onChange={(e) => handleChange(e)}
							className='input-overide'
						/>
					</Form.Group>
					<div className='d-grid gap-2 my-3'>
						<Button variant='danger' className='bg-overide' type='submit'>
							Register
						</Button>
					</div>
					<p className='text-center'>
						Already have an account ? Click{' '}
						<span onClick={props.switchModal}>
							<strong>Here</strong>
						</span>
					</p>
				</Form>
			</Modal.Body>
		</Modal>
	);
}

export default RegisterModal;
