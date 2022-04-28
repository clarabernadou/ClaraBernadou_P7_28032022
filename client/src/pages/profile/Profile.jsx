import "./profile.css";
import Topbar from "../../components/topbar/Topbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
          <div className="profileTop">
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
          <div className="registerBox">
            <input placeholder="Position in the compagny" className="loginInput" />
            <div className="registerName">
              <input placeholder="First name" className="loginInputName" />
              <input placeholder="Last name" className="loginInputName" />
            </div>
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Modify</button>
        </div>
        </div>
        <hr />
          <div className="profileBottom">
            <div className="profileButton">
              <button className="loginButtonRed">Delete acount</button>
              <button className="loginButton">Log out</button>
            </div>
          </div>
      </div>
    </>
  );
}
