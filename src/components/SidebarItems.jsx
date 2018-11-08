import React from "react";
import SideBar from "./Sidebar";

const sideStuff = [
  {
    categoryName: "games",
    subList: [
      {link: '#/Shop',
        item: 'shop'},
      {link: '#/Shop',
        item: 'shop'},
      {link: '#/Shop',
        item: 'shop'},
      {link: '#/Shop',
        item: 'shop'}
    ]
  },
  {
    categoryName: "kittens",
    subList: [
      {link: '#/Shop',
        item: 'shop'},
      {link: '#/Shop',
        item: 'shop'},
      {link: '#/Shop',
        item: 'shop'},
      {link: '#/Shop',
        item: 'shop'}
    ]
  },
  {
    categoryName: "brandy",
    subList: [
      {link: '#/Shop',
        item: 'shop'},
      {link: '#/Shop',
        item: 'shop'},
      {link: '#/Shop',
        item: 'shop'},
      {link: '#/Shop',
        item: 'shop'}
    ]
  },
];
function SidebarItems(){
  var SideBarStyles = {
    position: "absolute",
    width: "10%",
    listStyle: "none",
    left: "-175px",
  };
  return (
    <div style={SideBarStyles}>
      {sideStuff.map((item, index) =>
        <SideBar categoryName={item.categoryName}
          subList={item.subList}
          key={index}
        />
      )}
    </div>
  );}

export default SidebarItems;
