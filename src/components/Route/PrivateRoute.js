import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const isLogedIn = window.localStorage.getItem('isLogedIn');

	return (
		<>
			<Route
				{...rest}
				render={(props) =>
					isLogedIn === 'true' ? (
						<Component {...props} />
					) : (
						<Redirect to='/signin' />
					)
				}
			/>
		</>
	);
};

export default PrivateRoute;
