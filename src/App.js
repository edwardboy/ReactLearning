import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header/Header";
import LeftMenu from "./component/left-menu/LeftMenu";
import Demo from "./component/learn/Demo";

function App() {
  return (
    <div className="App">
      <Header />
      <LeftMenu />
      <Demo />
    </div>
  );
}

export default App;
