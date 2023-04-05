import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';

const Foods = () => {
    const foods = useLoaderData();
    return (
        <div className='grid md:grid-cols-3 mt-5'>
            {
                foods.meals.map(food => <Food
                    key={food.idMeal}
                    food={food}
                ></Food>)
            }
        </div>
    );
};

export default Foods;