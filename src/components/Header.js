import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
            <Link to={"/roster"}>Roster</Link>
            <Link to={"/schedule"}>Roster</Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
