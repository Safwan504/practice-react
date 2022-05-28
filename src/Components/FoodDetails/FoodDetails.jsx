import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './FoodDetails.css';

const FoodDetails = () => {

    const { foodID } = useParams();
    const [foodDetail, setFoodDetail] = useState({});

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodID}`)
            .then(res => res.json())
            .then(data => setFoodDetail(data.meals[0]))
    }, [foodID]);

    console.log(foodDetail)
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="thumb-image">
                    <img className="img-fluid" src={foodDetail.strMealThumb} alt="Meal" />
                </div>
                <h3 className="text-center pt-4">Item: {foodDetail.strMeal}</h3>
                <small className="text-center pb-3">Origin: {foodDetail.strArea}</small>
                <p>Instruction: {foodDetail.strInstructions}</p>
            </div>
            <Link to="/"><button className="btn btn-secondary mt-5">🏠Go to Home</button></Link>
        </div>
    );
};
export default FoodDetails;