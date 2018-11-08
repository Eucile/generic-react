import React from "react";

function About(){
  var AboutStyles = {
    display: 'flex',
    backgroundImage: 'url(https://store.steampowered.com//public/images/about/header.png)',
    backgroundRepeat: 'repeat',
    height: '350px',
    marginTop: 30
  };
  var backgroundStyles = {
    backgroundColor: 'black',
    height: '100vh'
  };
  return (
    <div style={backgroundStyles}>
      <div style={AboutStyles} className="banner"></div>
      <p></p>
      <div>
      </div>

    </div>
  );
}


export default About;
