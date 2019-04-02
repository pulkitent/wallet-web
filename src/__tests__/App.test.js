import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from "enzyme";
import Wallet from "../Wallet";
import FilterableTransactionsTable from "../FilterableTransactionsTable";

describe("", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("Wallet", () => {
    it('Wallet should be present', () => {
      const app = shallow(<App/>);

      expect(app.find(Wallet)).toHaveLength(1);
    });
  });

  describe("FilterableTransactionsTable", () => {
    it('FilterableTransactionsTable should be present', () => {
      const app = shallow(<App/>);

      expect(app.find(FilterableTransactionsTable)).toHaveLength(1);
    });
  });
});
