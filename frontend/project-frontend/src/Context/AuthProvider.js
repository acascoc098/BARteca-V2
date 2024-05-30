import React, { createContext, useContext, useReducer, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const navigate = useNavigate();

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

    const login = async (username, password) => {

        try {
            const response = await axios.post('http://localhost:8080/login', { username, password });
            localStorage.setItem('token', response.data.token);
            navigate("/bares");
        } catch (error) {
            console.error('Error logging in:', error);
            dispatch({ type: 'LOGIN_FAILED', payload: error.response.data || 'Error al iniciar sesión' })
        }
    };

    const register = async (data) => {
        try {
            const response = await axios.post(`${URL}/usuario`, data);
            const { accessToken, usuario } = response.data;
            localStorage.setItem('token', accessToken);
            localStorage.setItem('usuario', JSON.stringify(usuario));
            dispatch({ type: 'REGISTER_SUCCESS', payload: { usuario, accessToken } });
            navigate('/bares');
        } catch (error) {
            dispatch({ type: 'REGISTER_FAILED', payload: error.response.data || 'Error en el registro' });
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        dispatch({ type: 'LOGOUT' });
    };

    const getToken = () => {
        return state.token;
    };

    return (
        <AuthContext.Provider value={{ login, register, logout, getToken, state, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
