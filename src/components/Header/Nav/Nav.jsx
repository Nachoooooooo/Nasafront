import React, { Component } from "react";
import { Link } from "react-router-dom";



class Nav extends Component {
  render() {
    return <nav>
      <div id="menu">
        <Link to="/">HOME</Link>
        <Link to="/pokemons">POKEMONS</Link>
        <Link to="/altapokemons">ALTA</Link>

      </div>
    </nav>;
  }
}

export default Nav;
