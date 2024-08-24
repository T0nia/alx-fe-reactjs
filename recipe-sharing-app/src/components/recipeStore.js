import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
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