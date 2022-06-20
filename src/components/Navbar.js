import React from "react";
import Troll from "../images/Troll Face.png";

export default function Navbar() {
  return (
    <header className="navheader">
      <img src={Troll} className="troll--image" />
      <h1 className="memegen">Meme Generator</h1>
      <h4 className="course">React Course - Project 3</h4>
    </header>
  );
}
