import React from "react";
import { shallow } from "enzyme";
import Asteroides from "./Asteroides";

describe("Asteroides", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Asteroides />);
    expect(wrapper).toMatchSnapshot();
  });
});
