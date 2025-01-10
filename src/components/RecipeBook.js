import React, { useState } from 'react';
import Filter from './Filter';
import Recipe from './Recipe';
import '../styles/RecipeBook.css';

const RecipeBook = () => {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [filter, setFilter] = useState('');

  const handleAddRecipe = (e) => {
    e.preventDefault();
    const newRecipe = { name, ingredients, instructions };
    setRecipes([...recipes, newRecipe]);
    setName('');
    setIngredients('');
    setInstructions('');
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.ingredients.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="recipe-book">
      <h1>Recipe Book</h1>

      
      <Filter filter={filter} setFilter={setFilter} />

      <form onSubmit={handleAddRecipe} className="recipe-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Recipe Name"
          className="form-input"
        />
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredients (e.g., Chicken, Spices)"
          className="form-input"
        />
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Instructions"
          className="form-textarea"
        ></textarea>
        <button type="submit" className="form-button">Add Recipe</button>
      </form>

      <div className="recipes-container">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <Recipe key={index} recipe={recipe} />
          ))
        ) : (
          <p className="no-recipes">No recipes to display.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeBook;
