import "./writeemail.css";
function WriteEmails() {
  return (
    <div className="write-email-unit">
      <img
        src="https://i2-prod.walesonline.co.uk/news/uk-news/article23927263.ece/ALTERNATES/s615/0_F038F02A-D11F-11EC-A042-0A2111BCB09D.jpg"
        alt=""
        className="avatar"
      />
      <div className="write-email-container">
        <div className="write-email-container__top">
          <div className="write-email-container__top-left">
            <span className="material-symbols-outlined">undo</span>
            <span className="material-symbols-outlined">arrow_drop_down</span>
            <p>Whatever</p>
          </div>
          <div>
            <span className="material-symbols-outlined">aspect_ratio</span>
          </div>
        </div>
        <div className="write-email-container__middle">
          <div className="more-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <div className="write-email-container__down">
          <div className="write-email-container__down-left">
            <button className="send">Send</button>
            <span className="material-symbols-outlined down-option">
              text_increase
            </span>
            <span className="material-symbols-outlined down-option">
              attach_file
            </span>
            <span className="material-symbols-outlined down-option">mood</span>
            <span className="material-symbols-outlined down-option">image</span>
          </div>
          <div className="write-email-container__down-right">
            <span className="material-symbols-outlined down-option">
              more_vert
            </span>
            <span className="material-symbols-outlined down-option">
              delete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WriteEmails;
