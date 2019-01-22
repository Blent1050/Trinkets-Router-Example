import React from "react";

import data from "../data";

function Shop(props) {
  return (
    <div className="items-list-wrapper">
      {data.map(item => (
        <div className="item-card" key={item.id}>
          <img
            className="item-list-image"
            src={item.imageUrl}
            alt={item.name}
          />
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Shop;
