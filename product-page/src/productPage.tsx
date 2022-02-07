import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ProductPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState<any>();
  console.log(id);
  useEffect(() => {
    id &&
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.data)
        .then((json) => setItem(json));
  }, [id]);

  return (
    <div>
      {item ? (
        <div>
          <h2>{item.title}</h2>
          <img src={item.image} alt="product" />
          <p>{item.description}</p>
          <p>Price: $ {item.price}</p>
        </div>
      ) : (
        <div>Not Found</div>
      )}
    </div>
  );
};

export default ProductPage;
