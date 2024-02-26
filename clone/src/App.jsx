import "./App.css";
import gptlogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/online-work.png";
import gptImgLogo from "./assets/chatbot.png";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptlogo} alt="logo" className="logo" />
            <span className="brand">Chat GPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>

          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="query" />
              What is Programming?
            </button>
            <button className="query">
              <img src={msgIcon} alt="query" />
              How to use an API?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="home" className="listitemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="saved" className="listitemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="rocket" className="listitemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img  className="chatimg" src={userIcon} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              nesciunt ullam non, nemo saepe accusantium. Minima voluptate
              cupiditate natus dolorum perferendis dolorem! Quaerat sed nesciunt
              impedit totam reiciendis aspernatur at!
            </p>
          </div>
          <div className="chat bot">
            <img className="chatimg" src={gptImgLogo} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              nesciunt ullam non, nemo saepe accusantium. Minima voluptate
              cupiditate natus dolorum perferendis dolorem! Quaerat sed nesciunt
              impedit totam reiciendis aspernatur at!
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a Message" />{" "}
            <button className="send">
              <img src={sendBtn} alt="send" />
            </button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places, or facts</p>
        </div>
      </div>
    </div>
  );
}

export default App;
