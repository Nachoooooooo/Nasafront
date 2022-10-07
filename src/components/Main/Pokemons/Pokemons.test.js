import React from "react";
import { shallow } from "enzyme";
import Topics from "./Topics";

describe("Topics", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Topics />);
    expect(wrapper).toMatchSnapshot();
  });
});
