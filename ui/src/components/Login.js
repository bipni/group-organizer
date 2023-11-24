import { useState } from 'react';

import '../styles/Login.css';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        alert(userName + password);
        event.preventDefault();
    };

    return (
        <div className="login">
            <h1>Group Organizer</h1>

            <div className="login-area">
                <form onSubmit={handleSubmit}>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Username"
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
}

export default Login;
