import React from "react";

function SearchField(){
  var searchStyles = {
    height: 20,
    width: "10%",
    paddingLeft: "2em",
    marginTop: "3em",
  };
  return (
    <div style={searchStyles} className="hateThis">
      <input placeholder="search . . .">
      </input>
      <style jsx>{`
      input {
        border-color:black;
        width: 100%;
        border-width: thin;
        border-color: black;
        border-top: hidden;
        border-left: hidden;
        border-right: hidden;
      }
      input:focus{
        outline: none;
        border-color: black;
        border-top: hidden;
        border-left: hidden;
        border-right: hidden;
      }
      `}</style>
    </div>
  );
}

export default SearchField;
