import React from 'react';
import { Link } from 'react-router-dom';

const Foods = (props) => {
    const { strMeal, strCategory, strMealThumb, idMeal } = props.food;
    return (
        <div className="col-md-4">
            <div className=" mt-5 text-center shadow rounded p-3">
                <div className="thumbIMG">
                    <img src={strMealThumb} className="img-fluid" alt="" />
                </div>
                <h3 className="mt-3">Meal: {strMeal}</h3>
                <p>Category: {strCategory}</p>
                <Link to={`/food/${idMeal}`} ><button className="btn btn-dark">Details</button></Link>
            </div>
        </div>

    );
};

export default Foods;