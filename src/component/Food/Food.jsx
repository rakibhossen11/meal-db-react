import React from "react";
import { Link } from "react-router-dom";

const Food = ({ food }) => {
  const {
    idMeal,
    strArea,
    strCategory,
    strMeal,
    strInstructions,
    strMealThumb,
  } = food;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={strMealThumb}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {strMeal}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{strCategory}</p>
          <div className="card-actions justify-between">
            <Link to={`/food/${idMeal}`} className="badge-primary badge-outline">Food Details</Link>
            <div className="badge badge-outline">{strArea}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
