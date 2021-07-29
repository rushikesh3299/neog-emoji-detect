import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
  "😀": "Grinning Face",
  "😃": "Big Eyes",
  "😄": "Smiling",
  "😆": "Squinting Face",
  "😅": "Face with Sweat",
  "🤣": "Laughing",
  "😂": "Tears of Joy",
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

const emojis = Object.keys(emojiDict);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function inputHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDict) {
      setMeaning(emojiDict[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function ClickHandler(inputEmoji) {
    setEmoji(inputEmoji);
    setMeaning(emojiDict[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>inside outtt!</h1>
      <input onChange={inputHandler} placeholder={"Search your emoji"} />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span onClick={() => ClickHandler(emoji)}>{emoji}</span>
      ))}
    </div>
  );
}
