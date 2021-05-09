import React, { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }){
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div className="auth-page">
            {showLogin ? 
            <LoginForm setUser={setUser} />
            :
            <SignUpForm setUser={setUser} />
            }
            <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
        </div>
    );
}