import React, { Component } from "react";
import { Link } from "react-router-dom";



class Nav extends Component {
  render() {
    return <nav>
      <div id="menu">
        <Link to="/">HOME</Link>
        <Link to="/neas">NEAS</Link>
        <Link to="/asteroides">ASTEROIDES</Link>
      </div>
    </nav>;
  }
}

export default Nav;
