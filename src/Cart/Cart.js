import React from 'react';

import './Cart.css'

const Cart = (props) => {

    console.log(props.cartDetails);

    const { idMeal, strMeal, strArea, strMealThumb, strInstructions } = props.cartDetails
    return (
        <div>
            <div>
                <p><small>Meal ID: {idMeal}</small></p>
            </div>
            <div className='Meal-Details'>
                <h2> Meal Details</h2>
                <div className='meal-image'>
                    <img src={strMealThumb} alt="" />
                </div>
                <div className='meal-Details'>

                    <h5>Item name: {strMeal}</h5>
                    <p className='instruction'>Instruction: {strInstructions}</p>
                    <p><small>Area: {strArea}</small></p>

                </div>

            </div>
        </div>
    );
};

export default Cart;