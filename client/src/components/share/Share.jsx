import "./share.css";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <div className="shareInfosContainer">
            <div className="shareName">
              <span className="shareProfileName">Username</span>
            </div>
          </div>
        </div>
        <div className="postInput">
          <input
            placeholder="What's in your mind "
            className="shareInput"
          />
        </div>
          <div className="mediasOption">
            <div className="shareIcon"/>
          </div>
          <div className="postButton">
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
