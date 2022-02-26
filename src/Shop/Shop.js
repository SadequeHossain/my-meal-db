import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    // console.log('Hello From Shop')

    const [Products, setProducts] = useState([]);



    const [inputData, setInputData] = useState([]);
    let [print, setPrint] = useState([false]);

    const [cartDetails, setCartDetails] = useState([]);

    useEffect(() => {

        const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Fish'

        // console.log('Product API Called')
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProducts(data.meals)
                // console.log('Product Received');

            });
    }, [])
    // console.log(Products);

    // const handleSearch = (event) => {
    //     const searchText = event.target.inputText.value;
    //     console.log(searchText)





    const inputText = (event) => {

        const textInput = event.target.value;
        setInputData(textInput);

    };

    const mySearch = () => {
        if (print = true) {
            const mytext = inputData;
            return mytext;
        }


    }

    // console.log('Here is mysearch', mySearch());


    const handleProducts = (product) => {

        // console.log(product)
        setCartDetails(product);

    }


    // handleProducts();



    // console.log('The length is', Products.length);
    return (
        <div>
            <div className='search-box'>
                <input onChange={inputText} name='inputeText' type="text" placeholder='Search your favorite Meal!!!!!' />
                <button onClick={() => setPrint(true)}>Search</button>
            </div>
            <p>Item Found: {Products.length}</p>
            <div className='shop-Container'>
                <div className='product-container'>

                    {
                        Products.map(product => <Product product={product}
                            key={product.idMeal}
                            handleProducts={handleProducts}

                        ></Product>)
                    }

                </div>
                <div>

                    <Cart cartDetails={cartDetails}></Cart>


                </div>
            </div>
        </div>
    );
};

export default Shop;