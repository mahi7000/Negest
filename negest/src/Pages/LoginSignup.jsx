import React, { useState } from 'react';
import './styles/LoginSignup.css'; // Optional: Create a CSS file for styling

export const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            // Handle login logic
            console.log('Logging in with', { email, password });
        } else {
            // Handle signup logic
            if (!email || !password || !username) {
                setError('Please fill in all fields');
                return;
            }
            console.log('Signing up with', { username, email, password });
        }
        // Reset form
        setEmail('');
        setPassword('');
        setUsername('');
        setError('');
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
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required={!isLogin}
                        />
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <div className="button-container">
                  <button className='log' type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
                </div>
                <p onClick={() => setIsLogin(!isLogin)} className="toggle-link">
                    {isLogin ? 'Need an account? Signup' : 'Already have an account? Login'}
                </p>
            </form>
        </div>
    );
};