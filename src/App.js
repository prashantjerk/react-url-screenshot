import React, { useState } from "react";
import "./App.css";

function App() {
  const API_KEY = "ecdcdbe4c699470ba4fa4921e93db0b1";
  const [url, setUrl] = useState("");
  const link = `https://api.apiflash.com/v1/urltoimage?access_key=${API_KEY}&url=${url}&format=jpeg&fresh=true&full_page=true&no_ads=true`;
  const [image, setImage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("clicked");
    const response = await fetch(link); // here we fetch the response from the `link`
    const blob = await response.blob(); // here the fetched response is then turned into binary large object (blob)
    setImage(URL.createObjectURL(blob)); // converted the image data to a data URL and state updated
    setUrl("");
  };
  return (
    <div className="main">
      <nav className="navbar">
        <div className="navbar-content">
          <input
            className="url-input"
            type="text"
            value={url}
            placeholder="Paste the URL"
            autoFocus
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <button className="submit-btn" type="submit" onClick={submitHandler}>
            Screenshot
          </button>
        </div>
      </nav>

      <section className="hero">
        <a href={image}>
          <img src={image}></img>
        </a>
      </section>
    </div>
  );
}

export default App;
