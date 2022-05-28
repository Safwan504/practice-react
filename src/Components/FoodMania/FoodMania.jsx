import React, { useEffect, useState } from 'react';
import Foods from '../Foods/Foods';

const FoodMania = () => {
    const [foods, setFoods] = useState([]);
    const [sText, setSText] = useState('');
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${sText}`)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [sText])

    const handleChange = (e) => {
        setSText(e.target.value);
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <input type="text" onChange={handleChange} placeholder="Search Your Meal" />
                    {
                        foods?.length > 0 ? foods.map(food => <Foods food={food} key={food.idMeal}></Foods>) 
                        : <h1 className="text-danger mt-5 text-center">😕 No results Matched</h1>
                       
                    }
                </div>
            </div>
        </div>
    );
};

export default FoodMania;