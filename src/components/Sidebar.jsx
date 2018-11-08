import React from "react";
import stylish from "./Stylish";

function SideBar(){
  var SideBarStyles = {
    position: "absolute",
    width: "10%",
    listStyle: "none",
    left: "-175px",
  };
  var bullets = {
    marginTop: 0,
    paddingLeft: 5,
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    justifyContent: "space-between",
    height: 400
  };
  var aStyles = {
    cursor: "crosshair",
    fontWeight: "bolder",
    textTransform: "uppercase"
  };
  return (
    <div style={SideBarStyles}>
      <ul style={bullets}>
        <li className="color-toggle" style={aStyles}>link</li>
        <li className="color-toggle" style={aStyles}>categories</li>
        <li className="color-toggle" style={aStyles}>stuff</li>
        <li className="color-toggle" style={aStyles}>stuffs</li>
      </ul>
      <style jsx>{`
          .color-toggle{
            text-decoration: none;
            color: black;
          }
          .color-toggle:hover {
            text-decoration: underline;
          }
        `}</style>
    </div>
  );
}

export default SideBar;
