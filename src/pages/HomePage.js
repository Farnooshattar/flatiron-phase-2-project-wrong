import React from "react";
import Counter from "../Counter";
import LoginShowModal from "../LoginShowModal";

function HomePage() {
  return (
    <div>
      <div>
        <Counter />
        <LoginShowModal />
      </div>
      <img
        src={require("../images/679db61ec05330a482f8ca16488cf145.gif")}
        alt=""
      />
    </div>
  );
}

export default HomePage;
