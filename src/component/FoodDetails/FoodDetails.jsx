import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodDetail from '../FoodDetail/FoodDetail';

const FoodDetails = () => {
    const food = useLoaderData();
    // console.log(food.meals);
    return (
        <div>
            <h3>This is food details:{food.idMeal}</h3>
            {
                food.meals.map(meal => <FoodDetail
                    key={meal.mealId}
                    meal={meal}
                ></FoodDetail>)
            }
            
        </div>
    );
};

export default FoodDetails;