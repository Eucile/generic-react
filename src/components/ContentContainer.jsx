import React from "react";
import SidebarItems from "./SidebarItems";
import MainContent from "./MainContent";

function ContentContainer(){
  var containerStyle = {
    position: "relative",
    marginTop: 100,
    marginLeft: "auto",
    marginRight: "auto",
    width: "45%",
  };
  return (
    <div style={containerStyle}>
      <SidebarItems/>
      <MainContent/>
    </div>
  );
}

// Ticket.propTypes = {
//   names: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   issue: PropTypes.string
// };

export default ContentContainer;
