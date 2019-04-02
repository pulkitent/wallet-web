import React, { Component } from "react";
import "./App.css";
import Wallet from "./Wallet";
import FilterableTransactionsTable from "./FilterableTransactionsTable";

class App extends Component {
  render() {
    return (
      <div className={'App'}>
        <Wallet/>
        <FilterableTransactionsTable/>
      </div>
    );
  }
}

export default App;
