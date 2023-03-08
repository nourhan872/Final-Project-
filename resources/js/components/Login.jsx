import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2 className="s">Welcome</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email" className="sign">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="E-mail" id="email" name="email" />
                <label htmlFor="password" className="sign">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button type="submit" className="bb">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}