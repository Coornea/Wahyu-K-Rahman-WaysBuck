import {createContext, useReducer} from 'react';

export const AppContext = createContext()

const initialState = {
    isLogin: false,
    carts: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLogin: true
            }
        case "LOGOUT":
            return {
                ...state,
                isLogin: false
            }
        case "REGISTER":
            return {
                ...state,
                isLogin: true
            }
        default:
            throw new Error();
    }
}

function AppContextProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider