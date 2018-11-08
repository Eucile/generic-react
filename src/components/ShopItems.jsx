import React from "react";
import Shop from "./Shop";

var masterShopList = [
  {
    image: 'url(https://stavdal.me/wp/wp-content/uploads/2015/06/Celma-first-shots-02.06.jpg)',
    price: "infinite snuggles",
    info: "oh my gosh just so ardoralbeasdflaj"
  },
  {
    image: 'url(https://stavdal.me/wp/wp-content/uploads/2015/06/Celma-first-shots-02.06.jpg)',
    price: "infinite snuggles",
    info: "oh my gosh just so ardoralbeasdflaj"
  },
  {
    image: 'url(https://stavdal.me/wp/wp-content/uploads/2015/06/Celma-first-shots-02.06.jpg)',
    price: "infinite snuggles",
    info: "oh my gosh just so ardoralbeasdflaj"
  },
  {
    image: 'url(https://stavdal.me/wp/wp-content/uploads/2015/06/Celma-first-shots-02.06.jpg)',
    price: "infinite snuggles",
    info: "oh my gosh just so ardoralbeasdflaj"
  }
];

function ShopItems(){
  var shopContainer = {
    paddingTop: '4em',
    display: 'grid',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    gridTemplateColumns: 'repeat(2, 1fr)'
  };
  return (
    <div style={shopContainer}>
      {masterShopList.map((item, index) =>
        <Shop image={item.image}
          price={item.price}
          info={item.info}
          key={index}
        />
      )}
    </div>
  );
}

export default ShopItems;
