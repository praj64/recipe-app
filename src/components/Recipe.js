import React from 'react';
import '../styles/RecipeBook.css';

const Recipe = ({ recipe }) => {
  const getStyleClass = () => {
    if (recipe.ingredients.toLowerCase().includes('chocolate')) {
      return 'recipe-card chocolate';
    }
    if (recipe.ingredients.toLowerCase().includes('chicken')) {
      return 'recipe-card chicken';
    }
    return 'recipe-card default';
  };

  return (
    <div className={getStyleClass()}>
      <h3>{recipe.name}</h3>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
    </div>
  );
};

export default Recipe;
