import '../styles/Login.css'

function Login() {

    return (
        <div className="login">
            <h1>Group Organizer</h1>

            <div className="login-area">
                <form>
                    <label>Email:</label>
                    <input type="text" name="email"/>
                    <label>Password:</label>
                    <input type="password" name="password"/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        </div>
    );
}

export default Login;