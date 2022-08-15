import '../styles/Start.css'

function Start() {

    return (
        <div className="login">
            <h1>Group Organizer</h1>

            <div className="login-area">
                <form>
                    <label>Email: <input type="text" name="email"/></label>
                    <label>Password: <input type="password" name="password"/></label>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
}

export default Start;