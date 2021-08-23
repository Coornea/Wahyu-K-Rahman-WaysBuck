import React from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
	BiBasket,
	BiUserCircle,
	BiLogOutCircle,
	BiCoffeeTogo,
	BiAdjust,
} from 'react-icons/bi';
import Avatar from '../../assets/Avatar.svg';

function Admin({ handleLogout }) {
	return (
		<>
			<div className='position-relative mx-3 my-auto'>
				<span className='position-absolute  top-0 start-100 translate-middle badge rounded-pill bg-danger'>
					1<span className='visually-hidden'>product in cart</span>
				</span>
				<Link to='/cart'>
					<BiBasket className='icons-img' size='3rem'></BiBasket>
				</Link>
			</div>
			<Dropdown as={Nav.Item} className='ml-3'>
				<Dropdown.Toggle as={Nav.Link}>
					<img
						className=''
						src={Avatar}
						alt='user pic'
						width='50px'
						style={{ position: 'relative', transform: 'translate(15px,-3px)' }}
					/>
				</Dropdown.Toggle>
				<Dropdown.Menu align='end' className='shadow' style={{ border: 0 }}>
					<Dropdown.Item as={Link} to='/addProduct'>
						<BiCoffeeTogo className='icons-img' size='2rem' />
						Add Product
					</Dropdown.Item>
					<Dropdown.Item as={Link} to='/addTopping'>
						<BiAdjust className='icons-img' size='2rem' />
						Add Topping
					</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item as={Link} to='/profile'>
						<BiUserCircle className='icons-img' size='2rem' />
						Profile
					</Dropdown.Item>
					<Dropdown.Item onClick={handleLogout}>
						<BiLogOutCircle className='icons-img' size='2rem' />
						Logout
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</>
	);
}

export default Admin;
