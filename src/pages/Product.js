import React, { useState } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import ToppingCard from '../components/Product/ToppingCard';

function Product() {
	const [checkedToppings, setCheckedToppings] = useState({});
	const handleChange = (event) => {
		setCheckedToppings({
			...checkedToppings,
			[event.target.id]: event.target.checked,
		});
		console.log(checkedToppings);
	};
	const data = require('../data/Toppings.json');
	return (
		<div className='d-block mx-auto' style={{ width: '70%' }}>
			<Row>
				<Col md={5} className='text-center'>
					<Image
						src={`../assets/img/products/CleponCoffee.svg`}
						width='90%'
					></Image>
				</Col>
				<Col md={7}>
					<h1 className='text-overide'>Ice Coffee Palm Sugar</h1>
					<span class='text-overide'>Rp. 31.000</span>
					<Row className='my-5'>
						<h5 class='text-overide'>Topping</h5>
						{data.map((topping) => {
							return (
								<ToppingCard
									topping={topping}
									key={topping.id}
									onChange={handleChange}
									checked={checkedToppings[topping.id] || false}
								/>
							);
						})}
						<Row className='justify-content-between my-4'>
							<Col>
								<h5>Total</h5>
							</Col>
							<Col>
								<h5 className='text-end'>Rp. 31.000</h5>
							</Col>
							<div className='d-grid gap-2 mt-3'>
								<Button variant='danger' className='bg-overide' type='submit'>
									Add to Cart
								</Button>
							</div>
						</Row>
					</Row>
				</Col>
			</Row>
		</div>
	);
}

export default Product;
