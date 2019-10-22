import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import ServiceItem from "./ServiceItem";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = {
    inputValue: "",
    contents: ["头部按摩", "精油推背"]
  };

  inputChange(e) {
    // console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    });
  }

  addService() {
    if (this.state.inputValue) {
      this.setState({
        contents: [...this.state.contents, this.state.inputValue],
        // this.state.contents.concat(this.state.inputValue),
        inputValue: ""
      });
    }
  }

  removeService(index) {
    let editContents = this.state.contents;
    // let index = editContents.indexOf(item)
    editContents.splice(index, 1);
    this.setState(
      {
        contents: editContents
      },
      () => {
        console.log(this.state.contents);
      }
    );
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="jspang">加入服务：</label>
          <input
            value={this.state.inputValue}
            onChange={e => this.inputChange(e)}
          />
          <button onClick={() => this.addService()}> 增加服务 </button>
        </div>
        <ul>
          {this.state.contents.map((item, index) => {
            return (
              <ServiceItem
                index={index}
                key={index}
                content={item}
                onclick={ind => this.removeService(ind)}
              />
            );
            // <li onClick={()=>this.removeService(index)} key={index}>{item}</li>
          })}
        </ul>
      </Fragment>
    );
  }
}

export default App;
