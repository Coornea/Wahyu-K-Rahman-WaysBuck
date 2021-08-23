import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { BiCoffeeTogo, BiTrash, BiReceipt } from 'react-icons/bi';

function Cart(props) {
	const [formData, setFormData] = useState({
		email: '',
		fullName: '',
		phone: '',
		postCode: '',
		address: '',
	});

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<div className='d-block mx-auto' style={{ width: '70%' }}>
			<h2 className='text-overide'>My Cart</h2>
			<Row>
				<Col md={7} className='mt-4'>
					<div className='border-bottom'>
						<h6 className='text-overide'>Review Your Order</h6>
					</div>
					<div className='border-bottom'>
						<Row>
							<Col md={2}>
								<BiCoffeeTogo size='5rem' />
							</Col>
							<Col md={8} className=''>
								<h6 className='text-overide mt-3'>Ice Coffee Palm Sugar</h6>
								<span className='text-overide'>Topping: Sugar Sugar Sugar</span>
							</Col>
							<Col md={2} className='text-end'>
								<p className='text-overide mt-3 mb-0'>Rp. 31.000</p>
								<BiTrash size='1.5rem' />
							</Col>
						</Row>
					</div>

					<div>
						<Row>
							<Col md={8}>
								<Row className='border-top mt-4 g-0'>
									<Col>
										<div className='mt-3'>
											<p className='text-overide mt-3'>Subtotal</p>
											<p className='text-overide'>Qty</p>
										</div>
									</Col>
									<Col>
										<div className='mt-3 text-end'>
											<p className='text-overide mt-3'>Rp. 31.000</p>
											<p className='text-overide'>2</p>
										</div>
									</Col>
								</Row>
								<Row className='border-top g-0'>
									<Col>
										<div className='mt-3'>
											<p className='text-overide mt-3'>
												<strong>Total</strong>
											</p>
										</div>
									</Col>
									<Col>
										<div className='mt-3 text-end'>
											<p className='text-overide mt-3'>
												<strong>Rp. 31.000</strong>
											</p>
										</div>
									</Col>
								</Row>
							</Col>
							<Col md={4}>
								<label for='formFileLg'>
									<div
										className='d-flex flex-column mt-4 justify-content-center align-items-center'
										style={{
											backgroundColor: 'rgba(224, 200, 200, 25%)',
											color: 'rgba(50,50,50,60%)',
											border: '2px solid #BD0707',
											width: '13rem',
											height: '9rem',
											borderRadius: '5px',
										}}
									>
										<BiReceipt size='3rem' />
										<p>Attach of Transaction</p>
									</div>
								</label>
								<Form.Group
									controlId='formFileLg'
									className='mt-3'
									style={{ display: 'none' }}
								>
									<Form.Control type='file' />
								</Form.Group>
							</Col>
						</Row>
					</div>
				</Col>
				<Col md={5} className='mt-5 ps-5'>
					<Form onSubmit={(e) => handleSubmit(e)}>
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

						<Form.Group className='mb-3' controlId='Phone'>
							<Form.Control
								type='tel'
								name='phone'
								placeholder='Phone'
								value={formData.phone}
								onChange={(e) => handleChange(e)}
								className='input-overide'
							/>
						</Form.Group>

						<Form.Group className='mb-3' controlId='postCode'>
							<Form.Control
								type='text'
								name='postCode'
								placeholder='Post Code'
								value={formData.postCode}
								onChange={(e) => handleChange(e)}
								className='input-overide'
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='address'>
							<Form.Control
								as='textarea'
								name='address'
								style={{ height: '100px' }}
								placeholder='Address'
								value={formData.address}
								onChange={(e) => handleChange(e)}
								className='input-overide'
							/>
						</Form.Group>

						<div className='d-grid gap-2 mt-5'>
							<Button variant='danger' className='bg-overide' type='submit'>
								Pay
							</Button>
						</div>
					</Form>
				</Col>
			</Row>
		</div>
	);
}

export default Cart;
