import React from 'react';
import { Nav, Button } from 'react-bootstrap';

function Guest({ dispatch }) {
	return (
		<>
			<Nav.Link>
				<Button
					variant='outline-danger'
					size='sm'
					onClick={() => dispatch({ type: 'ModalL' })}
				>
					Login
				</Button>
			</Nav.Link>
			<Nav.Link>
				<Button
					variant='danger'
					size='sm'
					className='bg-overide'
					onClick={() => dispatch({ type: 'ModalR' })}
				>
					Register
				</Button>
			</Nav.Link>
		</>
	);
}

export default Guest;
