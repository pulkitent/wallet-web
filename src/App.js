import React, { Component } from "react";
import "./App.css";
import Wallet from "./Wallet";
import ToggleableTransaction from "./ToggleableTransaction";

class App extends Component {
  render() {
    return (
      <div className={'App'}>
        <Wallet/>
        <ToggleableTransaction onSuccess={() => {}}/>
      </div>
    );
  }
}

export default App;
