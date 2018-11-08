import React from "react";
import image from "../assets/images/logo.png";

function Logo(){
  var logoStyles = {
    width: 85,
    height: 85,
    paddingLeft: 50
  };
  return (
    <a href="#"><img style={logoStyles} src={image}/></a>
  );
}

export default Logo;
