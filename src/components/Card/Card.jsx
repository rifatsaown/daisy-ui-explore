import React from "react";

const Card = ({ mobile }) => {
  const { title, brand, thumbnail, price, description } = mobile;
  return (
    <div>
      <div className="card h-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={thumbnail} alt={title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className="text-lg font-light">Brand : {brand}</p>
          <p>{description}</p>
          <p className=" font-extrabold">Price : ${price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
