import React from "react";
import PropTypes from "prop-types";

function SideBar(props){
  var bullets = {
    marginTop: 0,
    paddingLeft: 5,
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    justifyContent: "space-between",
  };
  var aStyles = {
    cursor: "crosshair",
  };
  return (
    <ul style={bullets}>
      <li className="category">{props.categoryName}</li>
      {props.subList.map((item, index) =>
        <li key ={index}><a className="color-toggle" style={aStyles} href={item.link}> {item.item}</a></li>
      )}
      <style jsx>{`
            .color-toggle{
              text-decoration: none;
              color: black;
              padding-left: 8px;
            }
            .category {
              font-size: 1.5em;
              padding-top: .3em;
              padding-left:0;
            }

            .color-toggle:hover {
              text-decoration: underline;
            }
            `}</style>
    </ul>
  );
}

SideBar.propTypes = {
  categoryName: PropTypes.string,
  subList: PropTypes.array
};

export default SideBar;
