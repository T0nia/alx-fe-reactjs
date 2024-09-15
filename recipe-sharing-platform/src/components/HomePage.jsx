import React, { useEffect, useState } from "react";
import Recipe from '../data.json'
import { Link } from "react-router-dom";

const HomePage = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        setdata(Recipe)
    }, []);

    return (
        <div className="bg-green-950 md:h-screen w-screen flex flex-col gap-8 items-center justify-center md:flex-row py-7 md:items-center">
            {data.map((recipe) => (
                 <div key={recipe.id} className="bg-green-100 w-64 md:w-60 flex flex-col rounded shadow hover:scale-110 transition-transform duration-500 ease-in-out">
                    <Link to={`/recipe/${recipe.id}`}>
                        <img src={recipe.image} alt="food" className="rounded h-52 w-full object-cover" />
                        <h1 className="text-green-800 text-base font-bold px-3 mt-6 uppercase hover:text-green-700">{recipe.title}</h1>
                        <p className="max-w-72 mt-2 mb-7 px-3 text-gray-600 text-sm">{recipe.summary}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default HomePage;