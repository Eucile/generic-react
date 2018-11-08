import React from "react";
import PropTypes from "prop-types";

function Party(props){
  var partyStyles = {
    backgroundImage: props.image,
    height: 500,
    width: 500,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  };
  return (
    <div>
      <h2>{props.price}</h2>
      <p>{props.info}</p>
    </div>
  );
}

Party.propTypes = {
  image: PropTypes.string,
  price: PropTypes.string,
  info: PropTypes.string
};

export default Party;
