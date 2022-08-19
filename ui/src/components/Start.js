import '../styles/Start.css'

function Start() {

    return (
        <div>
            <div className="login">
                <h1>Group Organizer</h1>

                <div className="login-area">
                    <form>
                        <label className="login-label">Email: <input type="text" name="email"/></label>
                        <label className="login-label">Password: <input type="password" name="password"/></label>
                        <span className="login-label"><input type="submit" value="Login"/></span>
                    </form>
                </div>
            </div>

            <div className="registration">
                <h2>Registration</h2>

                <div className="registration-area">
                    <form>
                        <span className="reg-lab-in">
                            {/* <label>Email: </label> */}
                            <input type="text" name="email" placeholder="Email"/>
                        </span>
                        <span className="reg-lab-in">
                            {/* <label>Username: </label> */}
                            <input type="text" name="username" placeholder="Username"/>
                        </span>
                        <span className="reg-lab-in">
                            {/* <label>Name: </label> */}
                            <input type="text" name="name" placeholder="Name"/>
                        </span>
                        <span className="reg-lab-in">
                            {/* <label>Mobile: </label> */}
                            <input type="text" name="mobile" placeholder="Mobile"/>
                        </span>
                        <span className="reg-lab-in">
                            {/* <label>Password: </label> */}
                            <input type="password" name="password" placeholder="Password"/>
                        </span>
                        <span className="reg-lab-in">
                            {/* <label>Retype Password: </label> */}
                            <input type="password" name="repassword" placeholder="Retype Password"/>
                        </span>
                        

                        <span>
                            <input type="submit" value="Submit"/>
                            <input type="button" value="Cancel"/>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Start;