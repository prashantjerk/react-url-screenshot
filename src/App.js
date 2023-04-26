import "./App.css";

function App() {
  return (
    <div className="main">
      <nav className="navbar">
        <div className="navbar-content">
          <input
            className="url-input"
            type="text"
            placeholder="Paste the URL"
            autoFocus
          />
          <button className="submit-btn" type="submit">
            Screenshot
          </button>
        </div>
      </nav>

      <section className="hero"></section>
    </div>
  );
}

export default App;
