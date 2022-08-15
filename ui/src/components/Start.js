import '../styles/Start.css'

function Start() {

    return (
        <div>
            <div className="login">
                <h1>Group Organizer</h1>

                <div className="login-area">
                    <form>
                        <label>Email: <input type="text" name="email"/></label>
                        <label>Password: <input type="password" name="password"/></label>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>

            <div className="registration">
                <h3>Registration</h3>

                <div className="registration-area">
                    <form>
                        <label className="reg-lab-in">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                        <label className="reg-lab-in">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
  
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Start;