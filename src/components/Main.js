import React, { useState } from "react";
import memeData from "../memeData";

export default function Main() {
  const [Memesdatas, NewMeme] = useState({
    topText: "",
    bottomText: "",
    memeImage: memeData.data.memes[0].url,
  });

  const [getMemeData] = useState({ ...memeData });

  function GetMeme(e) {
    e.preventDefault();
    const allMemeData = getMemeData.data.memes;
    const randNum = Math.floor(Math.random() * allMemeData.length);
    NewMeme((x) => ({ ...x, memeImage: allMemeData[randNum].url }));
  }
  return (
    <main>
      <form className="memegenbuttons">
        <input className="toptext" placeholder="Top Text" />
        <input className="bottext" placeholder="Bottom Text" />
        <button onClick={GetMeme}>Get new meme image</button>
        <img className="meme-pic" src={Memesdatas.memeImage} alt="meme_image" />
      </form>
    </main>
  );
}
