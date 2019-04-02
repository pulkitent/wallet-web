import { shallow } from "enzyme";
import React from "react";
import SearchBar from "../SearchBar";

describe("SearchBar", () => {
  it("should render without fail", () => {
    shallow(<SearchBar/>);
  });

  it("should render search bar", () => {
    const search = shallow(<SearchBar/>);
    const searchBar = search.find('#search');

    expect(searchBar.type()).toBe('input');
  });

  it("should render search bar", () => {
    let handleSearch = jest.fn();
    const search = shallow(<SearchBar onSearch={handleSearch}/>);
    const searchBar = search.find('#search');

    searchBar.simulate("change" ,{target:{value : "Sn"}});

    expect(handleSearch).toHaveBeenCalledWith("Sn");
  });
});
