import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.filteredRecipes);
    const initializeFilteredRecipes = useRecipeStore(state => state.initializeFilteredRecipes);
  
    // Initialize filtered recipes when the component mounts
    useEffect(() => {
      initializeFilteredRecipes();
    }, [initializeFilteredRecipes]);
  

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;