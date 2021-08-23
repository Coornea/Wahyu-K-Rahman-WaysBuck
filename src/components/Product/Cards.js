import React from 'react';
import { Card } from 'react-bootstrap';

function Cards(props) {
	function formatPrice({ price }) {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			minimumFractionDigits: 0,
		}).format(price);
	}

	return (
		<Card className='mx-1 my-2 card-overide'>
			<Card.Img
				className='img-card'
				variant='top'
				src={`./assets/img/products/${props.img}`}
				alt={props.product}
			/>
			<Card.Body>
				<Card.Title>{props.product}</Card.Title>
				<Card.Text className='fs-6'>
					<span>{formatPrice(props)}</span>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Cards;
