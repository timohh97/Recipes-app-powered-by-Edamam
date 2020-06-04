import React from 'react';

const Recipe = ({ title, calories, image, source,ingredients }) => {

    return (
        <div className="recipe">
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories} Calories</p>
            <img src={image} />
                <a style={{float:"right", "font-size":"xx-large"}} href={source}>Source</a>
        </div>
    );
}


export default Recipe;