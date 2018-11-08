import React from "react";
import PropTypes from "prop-types";

function Shop(props){
  var shopStyles = {
    backgroundImage: props.image,
    height: 500,
    width: 500,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  };
  return (
    <div style={shopStyles}>
      <h2>{props.price}</h2>
      <p>{props.info}</p>
    </div>
  );
}
Shop.propTypes = {
  image: PropTypes.string,
  price: PropTypes.string,
  info: PropTypes.string
};
export default Shop;
