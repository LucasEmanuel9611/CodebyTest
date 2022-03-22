import React from "react";
import { Card } from "./styles.js";

export default function CardItem(props) {
  const item = props.item;
  function formatValue(num) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(num / 100);
  }
  return (
    <Card>
      <img src={item.imageUrl} className="img-thumbnail" />
      <div className="title-area">
        <p className="name-item">{item.name.toLowerCase()}</p>
        <div className="price-area">
          <span>{formatValue(item.sellingPrice)}</span>
          <p>{formatValue(item.price)}</p>
        </div>
      </div>
    </Card>
  );
}
