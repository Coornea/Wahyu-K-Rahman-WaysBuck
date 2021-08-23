import React, { useState } from 'react';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';

function AddDataProduct(props) {
	const [formData, setFormData] = useState({
		productName: '',
		price: '',
		productImg: '',
	});

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}
	return (
		<Row
			className='mx-auto mt-5 pt-4 justify-content-between'
			style={{ width: '70%' }}
		>
			<Col md={7}>
				<h1 className='text-overide mt-3 mb-5'>Add {props.suffix}</h1>
				<Form onSubmit={(e) => props.handleSubmit(e, formData)}>
					<Form.Group className='mb-5' controlId='productName'>
						<Form.Control
							type='text'
							name='productName'
							placeholder={`${props.suffix} Name`}
							value={formData.productName}
							onChange={(e) => handleChange(e)}
							className='input-overide'
						/>
					</Form.Group>

					<Form.Group className='mb-5' controlId='Price'>
						<Form.Control
							type='number'
							name='price'
							step='1000'
							placeholder='Price'
							value={formData.price}
							onChange={(e) => handleChange(e)}
							className='input-overide'
						/>
					</Form.Group>

					<Form.Group className='mb-4' controlId='productImg'>
						<Form.Control
							type='file'
							name='productImg'
							placeholder='Product Image'
							value={formData.productImg}
							onChange={(e) => handleChange(e)}
							className='input-overide'
						/>
					</Form.Group>
					<div className='d-grid gap-2 mt-5'>
						<Button variant='danger' className='bg-overide' type='submit'>
							Add {props.suffix}
						</Button>
					</div>
				</Form>
			</Col>
			<Col md={5} className='text-center'>
				<Image
					src={`./assets/img/products/${props.suffix}.svg`}
					width='80%'
				></Image>
			</Col>
		</Row>
	);
}

export default AddDataProduct;
