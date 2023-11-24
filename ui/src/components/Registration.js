import '../styles/Registration.css';

function Registration() {
    return (
        <div className="registration">
            <h2>Registration</h2>

            <div>
                <form>
                    <label className="reg-label">Name</label>
                    <input
                        className="reg-input"
                        type="text"
                        name="name"
                        placeholder="Name"
                    />

                    <label className="reg-label">Username</label>
                    <input
                        className="reg-input"
                        type="text"
                        name="username"
                        placeholder="Username"
                    />

                    <label className="reg-label">Email</label>
                    <input
                        className="reg-input"
                        type="text"
                        name="email"
                        placeholder="Email"
                    />

                    <label className="reg-label">Mobile Number</label>
                    <input
                        className="reg-input"
                        type="text"
                        name="mobilenumber"
                        placeholder="Mobile Number"
                    />

                    <label className="reg-label">Password</label>
                    <input
                        className="reg-input"
                        type="password"
                        name="password"
                        placeholder="Password"
                    />

                    <label className="reg-label">Re-enter Password</label>
                    <input
                        className="reg-input"
                        type="password"
                        name="rpassword"
                        placeholder="Re-enter Password"
                    />

                    <span className="btn">
                        <input type="submit" value="Register" />
                        <input type="reset" value="Cancel" />
                    </span>
                </form>
            </div>
        </div>
    );
}

export default Registration;
