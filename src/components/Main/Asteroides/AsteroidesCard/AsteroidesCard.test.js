import React from "react";
import { shallow } from "enzyme";
import AsteroidesCard from "./AsteroidesCard";

describe("AsteroidesCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AsteroidesCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
