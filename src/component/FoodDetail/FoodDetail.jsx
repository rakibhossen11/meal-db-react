import React from "react";

const FoodDetail = ({ meal }) => {
  const { strMeal, strMealThumb, strInstructions } = meal;
  console.log(meal);
  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={strMealThumb}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal}</h2>
          <p>{strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
