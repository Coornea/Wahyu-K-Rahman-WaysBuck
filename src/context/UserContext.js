import React, { createContext, useReducer } from 'react';

export const UserContext = createContext();

const initialState = {
	isLogin: false,
	user: null,
};

const userReducer = (state, action) => {
	switch (action.type) {
		case 'AUTH_SUCCESS':
			return {
				...state,
				isLogin: true,
				user: action.payload,
			};
		case 'REGISTER':
			return {
				...state,
				isLogin: true,
				user: action.payload,
			};
		case 'LOGIN':
			return {
				...state,
				isLogin: true,
				user: action.payload,
			};
		case 'LOGOUT':
		case 'AUTH_ERROR':
			localStorage.removeItem('token');
			return {
				...state,
				isLogin: false,
				user: null,
			};
		default:
			console.log('ERR');
			throw new Error('unknown cases');
	}
};

export const UserProvider = (props) => {
	const [state, dispatch] = useReducer(userReducer, initialState);
	return (
		<UserContext.Provider value={{ state, dispatch }}>
			{props.children}
		</UserContext.Provider>
	);
};
