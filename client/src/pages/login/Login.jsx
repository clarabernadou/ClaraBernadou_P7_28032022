import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Groupomania</h3>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <span className="haveAccount">You do not have an account ? Sign up</span>
            <button className="loginButton">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
