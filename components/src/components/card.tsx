import React from "react";
import "./list.css";
import { Link } from "react-router-dom";
interface IProps {
  item: any;
}
const Card = ({ item }: IProps) => {
  return (
    <div onClick={() => (window.location.pathname = `/product/${item.id}`)}>
      <img src={item.image} alt="img" />
      <p>{item.title}</p>
      <p>$ {item.price}</p>
    </div>
  );
};

export default Card;
