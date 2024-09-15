
import React, { useEffect, useState } from 'react'
import RecipeDetails from '../data.json'
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const[recipe, setrecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const selectedRecipe = RecipeDetails.find((item) => item.id === parseInt(id));
    setrecipe(selectedRecipe)
}, [id]);

if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className='container m-auto'>
        <div key={recipe.id} className='bg-gray-200 max-w-sm md:max-w-xl mx-auto drop-shadow-sm rounded px-6 py-4 my-9'>
          <img src= {recipe.image} alt="food image" className='w-[22rem] md:w-[32rem] h-60 mx-auto rounded-md mb-8'/>
          <h1 className='text-green-800 text-base font-bold mt-6 uppercase hover:text-green-700'>{recipe.title}</h1>
          <p className='mt-2 mb-7 text-gray-600 text-sm'>{recipe.summary}</p>

          <h2 className='text-red-700 text-sm font-bold mt-6 mb-3 uppercase hover:text-green-700'>Ingredients</h2>
          <ul className='bg-gray-100 shadow p-5'>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className='text-gray-600 p-1 text-sm list-disc list-inside'>{ingredient}</li>
            ))}
          </ul>

          <h2 className='text-red-700 text-sm font-bold mt-6 mb-3 uppercase hover:text-green-700'>Instructions</h2>
          <ol className='bg-gray-100 shadow p-5'>
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className='text-gray-600 p-1 pl- text-sm list-decimal list-outside ml-4 marker:text-green-800 marker:font-bold space-y-2'>{instruction}</li>
            ))}
          </ol>
        </div>
    </div>
  )
}

export default RecipeDetail
