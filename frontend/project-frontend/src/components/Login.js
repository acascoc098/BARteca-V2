import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import './Login.css';

const Login = ({ onLogin }) => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', { username, password });
            localStorage.setItem('token', response.data.token);
            onLogin();
            navigate("/bar");
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleLogin}>
                <FloatLabel>
                    <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="username">Username</label>
                </FloatLabel>
                
                <FloatLabel>
                    <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} toggleMask />
                    <label htmlFor="password">Password</label>
                </FloatLabel>

                <Button label="Sign in" text raised type="submit" />
            </form>
        </div>
    );
};

export default Login;
