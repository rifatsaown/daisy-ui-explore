import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Product = () => {
  const [mobile, setMobile] = useState([]);
  useEffect(() => {
    fetch(
      "http://ec2-54-196-32-106.compute-1.amazonaws.com/api/v1/products?fbclid=IwAR3Ng4ZfMCYL3SdmGatwkma2bsZNqqBrcH6BYc2uYyVDqYSsh90topMKy3I"
    )
      .then((res) => res.json())
      .then((data) =>setMobile(data.data));
  }, []);
  console.log(mobile);
  return (
    <div className="mx-10 mt-10">
      <div className="grid grid-cols-3 gap-4">
      {mobile.map((mobile,index) => (<Card key={index} mobile={mobile}/>))}
      </div>
    </div>
  );
};

export default Product;
