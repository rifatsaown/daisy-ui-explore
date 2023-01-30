import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";

const Product = () => {
  const [mobile, setMobile] = useState([]);
  useEffect(() => {
    fetch("https://gorardim.com/api/v1/products")
      .then((res) => res.json())
      .then((data) => setMobile(data.data));
  }, []);
  return (
    <div className="mx-10 mt-10">
      <div className="">{mobile.length === 0 && <Loader />}</div>
      <div className="grid grid-cols-3 gap-4">
        {mobile.map((mobile, index) => (
          <Card key={index} mobile={mobile} />
        ))}
      </div>
    </div>
  );
};

export default Product;
