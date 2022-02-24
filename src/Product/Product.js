import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)

    const { idMeal, strMeal, strArea, strMealThumb } = props.product


    return (
        <div className='meal-Container'>
            <div className='meal-image'>
                <img src={strMealThumb} alt="" />
            </div>
            <div className='meal-Details'>
                <h5>Item name: {strMeal}</h5>
                <p>Meal ID: {idMeal}</p>
                <p><small>Area:{strArea}</small></p>
            </div>

        </div>
    );
};

export default Product;