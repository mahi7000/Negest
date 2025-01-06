import React, { useState } from 'react';
import './styles/LoginSignup.css';

export const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
    })
    const [error, setError] = useState('');

    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const login = async () => {
        console.log("Logged In", formData)
        let responseData;
        await fetch('http://localhost:4000/login', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => responseData = data)

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace('/');
        }
        else {
            alert("Try Again!");
        }
    }

    const signup = async () => {
        console.log("Signed Up", formData);
        let responseData;
        await fetch('http://localhost:4000/signup', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => responseData = data)

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace('/');
        }
        else {
            alert("Try Again!");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log('Logging in with', { formData });
        } else {
            if (!formData.email || !formData.password || !formData.name) {
                setError('Please fill in all fields');
                return;
            }
            console.log('Signing up with', { formData });
        }
        setFormData({
            email: '',
            password: '',
            name: '',
        })
    };

    return (
        <div className="login-signup-container">
            <h1>{isLogin ? 'Log In' : 'Sign Up'}</h1>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name='name'
                            value={formData.name}
                            onChange={changeHandler}
                            required={!isLogin}
                        />
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name='password'
                        value={formData.password}
                        onChange={changeHandler}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <div className="button-container">
                    <button onClick={() => {isLogin? login() : signup()}} className='log' type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
                </div>
                <p onClick={() => setIsLogin(!isLogin)} className="toggle-link">
                    {isLogin ? 'Need an account? Signup' : 'Already have an account? Login'}
                </p>
            </form>
        </div>
    );
};