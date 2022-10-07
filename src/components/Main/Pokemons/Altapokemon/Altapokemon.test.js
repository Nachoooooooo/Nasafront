import React from "react";
import { shallow } from "enzyme";
import Altapokemon from "./Altapokemon";

describe("Altapokemon", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Altapokemon />);
    expect(wrapper).toMatchSnapshot();
  });
});
