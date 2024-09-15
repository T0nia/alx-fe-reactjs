
import React, { useState } from 'react'

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

   
    if (!formData.title) {
      formErrors.title = 'Title is required';
    }

    const ingredientsArray = formData.ingredients.split(',').map((item) => item.trim());
    if (!formData.ingredients) {
      formErrors.ingredients = 'Ingredients are required';
    } else if (ingredientsArray.length < 2) {
      formErrors.ingredients = 'Please provide at least two ingredients';
    }

    if (!formData.steps) {
      formErrors.steps = 'steps is required';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          console.log('Form submitted:', formData);
        } else {
          console.log('Form has errors');
        }
      };


  return (
    <div className='container m-auto h-screen flex flex-col items-center justify-center'>
     <div className='shadow p-8'>
     <h1 className='mb-5 uppercase font-bold text-green-800'>Add your favourite recipes</h1>
      <form onSubmit={handleSubmit} className=' flex
    flex-col'>
      <div>
          <label className="block text-sm font-medium text-gray-700">Recipe Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 block w-[15rem] md:w-[20rem] border border-gray-300 rounded-md"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Preparations Steps</label>
          <input
            type="text"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="mt-1 p-2 block w-[15rem] md:w-[20rem] border border-gray-300 rounded-md"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* steps */}
        <div>
          <label className="block text-sm font-medium text-gray-700">steps</label>
          <textarea
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className="mt-1 p-2 block w-[15rem] md:w-[20rem] border border-gray-300 rounded-md"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-[15rem] md:w-[20rem] bg-green-800 text-white py-2 px-4 mt-4 rounded-md hover:bg-green-600 hover:transition-transform"
          >
            Submit Recipe
          </button>
        </div>
      </form>
     </div>
    </div>
  )
}

export default AddRecipeForm
