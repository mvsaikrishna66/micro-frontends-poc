import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "components/Card";
const Cart = () => {
  const [itemList, setItemList] = useState<Array<any>>([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => response.data)
      .then((json) => setItemList(json));
  }, []);
  return (
    <div>
      <h4>Your Cart</h4>
      <div className="list-wrapper">
        {itemList?.slice(0, 4)?.map((item: any) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
