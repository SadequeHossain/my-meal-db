import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)

    // console.log(props.product)

    // console.log(props)

    const { idMeal, strMeal, strArea, strMealThumb } = props.product


    return (
        <div className='meal-Container'>
            <div className='meal-image'>
                <img src={strMealThumb} alt="" />
            </div>
            <div className='meal-Details'>
                <h5>Item name: {strMeal}</h5>
                <p>Meal ID: {idMeal}</p>
                <p><small>Area: {strArea}</small></p>
                <button onClick={() => props.handleProducts(props.product)} className='orderbutton'>See Details</button>
            </div>

        </div>
    );
};

export default Product;