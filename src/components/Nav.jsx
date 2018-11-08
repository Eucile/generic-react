import React from "react";
import { Link } from 'react-router-dom';

function NavBar(){
  var navStyles = {
    display: "flex",
    width: "30%",
    listStyle: "none",
    justifyContent: "space-between",
    marginRight: 100,
  };
  var aStyles = {
    cursor: "crosshair",
    fontWeight: "bolder",
    textTransform: "uppercase"
  };
  return (
    <ul style={navStyles}>
      <li><a className="color-toggle" style={aStyles} href="#/About">about</a></li>
      <li><a className="color-toggle" style={aStyles} href="#/Shop">shop</a></li>
      <li><a style={aStyles} className="color-toggle"  href="#/Party">party</a></li>
      <li><a style={aStyles} className="color-toggle" href="#/fnord">fnord</a></li>
      <style jsx>{`
          .color-toggle{
            text-decoration: none;
            color: black;
          }
          .color-toggle:hover {
            text-decoration: underline;
          }
      `}</style>
    </ul>
  );
}

export default NavBar;
