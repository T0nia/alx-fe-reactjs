import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
 favorites: [],
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation for recommendations
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
  ///
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase()) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(term.toLowerCase()))
      )
    }));


    
  },
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
  // Initialize filteredRecipes with all recipes
  initializeFilteredRecipes: () => set(state => ({ filteredRecipes: state.recipes })),
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id),
  })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;