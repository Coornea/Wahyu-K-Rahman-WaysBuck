import React from 'react';
import HeroImg from '../assets/Jumbotron.svg';

function Hero() {
	return (
		<div className='my-4'>
			<img className='d-block mx-auto' src={HeroImg} alt='...' />
		</div>
	);
}

export default Hero;
