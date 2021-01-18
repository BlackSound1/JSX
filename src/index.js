import React from "react";
import ReactDOM from "react-dom";
import Heading from "./components/Heading.jsx";
import List from "./components/List";

const name = "Dude";
const number = 22;

ReactDOM.render(
  <div>
    <Heading />
    <p>Paragraph number {number + 42}</p>
  </div>,
  document.getElementById("root")
);

ReactDOM.render(
  <div>
    <h1 className="title" style={{ color: "blue" }}>
      Cool Stuff
    </h1>

    <List />

    <img
      className="food-img"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-dPwwzHzozXnwan-HOkWIwHaEK%26pid%3DApi&f=1"
      alt="cool1"
    ></img>
    <img
      className="food-img"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Bd1YsOoW8ssFWCx29d6uHwHaEo%26pid%3DApi&f=1"
      alt="cool2"
    ></img>
    <img
      className="food-img"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vlQ_pmiBmvBQ5DXirBVYxQHaEo%26pid%3DApi&f=1"
      alt="cool3"
    ></img>
  </div>,
  document.getElementById("other")
);

const currentTime = new Date().getHours();

if (currentTime >= 12 || currentTime < 18) {
  ReactDOM.render(
    <h1 className="title" style={{ color: "green" }}>
      Good Afternoon
    </h1>,
    document.getElementById("greet")
  );
} else if (currentTime >= 18 || currentTime < 0) {
  ReactDOM.render(
    <h1 className="title" style={{ color: "blue" }}>
      Good Evening
    </h1>,
    document.getElementById("greet")
  );
} else if (currentTime >= 0 || currentTime < 12) {
  ReactDOM.render(
    <h1 className="title" style={{ color: "red" }}>
      Good Morning
    </h1>,
    document.getElementById("greet")
  );
}

const myName = "Matt";
const currentYear = new Date().getFullYear();

const customStyle = {
  color: "purple",
  fontSize: "20px",
  border: "1px solid purple"
};

ReactDOM.render(
  <div>
    <p style={customStyle}>Created by {myName}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("bottom")
);
