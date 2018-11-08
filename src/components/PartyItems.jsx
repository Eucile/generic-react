import React from "react";
import Party from "./Party";

var masterPartyList = [
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

function PartyItems(){
  var partyContainer = {
    paddingTop: '4em',
    display: 'grid',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    gridTemplateColumns: 'repeat(2, 1fr)'
  };
  return (
    <div style={partyContainer}>
      {masterPartyList.map((item, index) =>
        <Party image={item.image}
          price={item.price}
          info={item.info}
          key={index}
        />
      )}
    </div>
  );
}

export default PartyItems;
