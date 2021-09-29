import React from "react";
import { Link } from "react-router-dom"

// Styles
import "../styles/Header.css"


const Header = (props) => {
  //   const { titulo, item } = props;
  //   console.log(props);
  return (
    <header className="normal-header">

      <Link to="/">C O U N T R I E S</Link>
      <ul>
        <li>
          <Link to="/search">SEARCH COUNTRY</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;