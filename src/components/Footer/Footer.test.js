import React from "react";
import Footer from "./Footer";

describe("Footer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
