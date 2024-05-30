import React, { createContext, useContext, useReducer, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, isAuthenticated: true, usuario: action.payload.usuario, token: action.payload.token, loginError: null };
        case 'LOGIN_FAILED':
            return { ...state, isAuthenticated: false, usuario: null, token: null, loginError: action.payload };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false, usuario: null, token: null, loginError: null };
        case 'REGISTER_SUCCESS':
            return { ...state, isAuthenticated: true, usuario: action.payload.usuario, token: action.payload.token, loginError: null };
        case 'REGISTER_FAILED':
            return { ...state, isAuthenticated: false, usuario: null, token: null, loginError: action.payload };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export const AuthProvider = ({ children }) => {

    const initialState = {
        isAuthenticated: false,
        usuario: null,
        token: null,
        loginError: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const usuario = JSON.parse(localStorage.getItem('usuario'));
            dispatch({ type: 'LOGIN_SUCCESS', payload: { usuario, token } });
        }
        setLoading(false);
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        dispatch({ type: 'LOGOUT' });
    };

    const getToken = () => {
        return state.token;
    };

    return (
        <AuthContext.Provider value={{logout, getToken, state, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
