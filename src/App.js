import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header/Header";
import LeftMenu from "./component/left-menu/LeftMenu";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <LeftMenu />
    </div>
  );
}

export default App;
