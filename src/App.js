import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = '27f147df';
  const APP_KEY = "fce638338573c0acd1d47ff64ce56ba8";

  const [recipes, setRecipes] = useState([]); 
  const [search , setSearch] = useState('');
  const [query,setQuery] = useState('chicken');

  useEffect(() => {

    getRecipes();
    
  }, [query]);

  const getRecipes = async () =>
  {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    
    setRecipes(data.hits);
    console.log(data.hits);

  }

  const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search)
  }

  const getSearch = e =>
  {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="searchform">
        <input className="searchbar" type="text" value={search} onChange={updateSearch}></input>
        <br></br>
        <button className="searchbutton" type="submit">Search for a recipe/Suche nach einem Rezept</button>
      </form>
      {recipes.map(recipe =>(
       
      <Recipe 
      key={recipe.recipe.label}
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories}
      image = {recipe.recipe.image}
      source = {recipe.recipe.url}
      ingredients={recipe.recipe.ingredients}
      />
      
      ))}
    </div>
  );
}

export default App;
