import React, { Component } from "react";
import "./App.css";
import Wallet from "./Wallet";
import CreateTransaction from "./CreateTransaction";

class App extends Component {
  render() {
    return (
      <div className={'App'}>
        <Wallet/>
        <CreateTransaction onTransaction={() => {}}/>
      </div>
    );
  }
}

export default App;
