import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import { NavigationBar } from "./NavigationBar";
import { BrowserRouter, Route } from "react-router-dom";
import FilterableTransactionsTable from "./FilterableTransactionsTable";

class App extends Component {
  render() {
    return (
      <div className={"App"}>
        <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
          <NavigationBar />

          <Route path="/" exact component={() => <Dashboard />} />
          <Route
            path="/transactions"
            exact
            component={() => <FilterableTransactionsTable />}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
