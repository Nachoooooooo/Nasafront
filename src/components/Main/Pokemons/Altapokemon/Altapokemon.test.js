import React from "react";
import { shallow } from "enzyme";
import AltaPokemons from "./AltaPokemons";

describe("AltaPokemons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AltaPokemons />);
    expect(wrapper).toMatchSnapshot();
  });
});
