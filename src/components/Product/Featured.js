import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Cards from './Cards';

function Featured() {
	const data = require('../../data/Products.json');
	console.log(data);
	return (
		<div className='d-block mx-auto' style={{ width: '70%' }}>
			<h1 className='text-overide'>Let's order</h1>
			<Row>
				{data.map((data) => (
					<Col key={data.id} md={3}>
						<Cards
							key={data.id}
							product={data.name}
							price={data.price}
							img={data.img}
						/>
					</Col>
				))}
				{/* <Col key={data.id} md={3}>
					<Cards
						key={data.id}
						product={data.name}
						price={data.price}
						img={data.img}
					/>
				</Col> */}
			</Row>
		</div>
	);
}

export default Featured;
