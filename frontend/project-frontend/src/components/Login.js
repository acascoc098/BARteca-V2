import { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setUsernamee } from '../Api/Api';

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', { username, password });
            localStorage.setItem('token', response.data.token);
            setUsernamee(username);
            navigate("/bares");
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="card card2 flex justify-content-center">
            <form onSubmit={handleLogin}>
                <FloatLabel>
                    <InputText id="username" style={{width: '100%'}} value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="username">Usuario</label>
                </FloatLabel>
                
                <FloatLabel>
                    <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} toggleMask />
                    <label htmlFor="password">Contraseña</label>
                </FloatLabel>

                <Button label="Sign in" text raised type="submit" />
                <br></br>
                <br></br>
                
                ¿No tienes cuenta? <br></br>                
                <Button label="Registrarse" className='mt-2' text raised onClick={() => {
                    navigate('/register');
                }} />
            </form>
        </div>
    );
};

export default Login;
