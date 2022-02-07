import React, { useEffect, useState } from "react";
import Card from "./card";
import axios from "axios";
import "./list.css";

interface IProps {
  token: string;
}

const List = ({ token }: IProps) => {
  const [itemList, setItemList] = useState<Array<any>>([]);
  console.log("token:", token);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => response.data)
      .then((json) => setItemList(json));
  }, []);
  return (
    <div className="list-wrapper">
      {itemList?.map((item: any) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
