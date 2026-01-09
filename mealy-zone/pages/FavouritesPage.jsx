import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const FavouritesPage = () => {
  const [favourites, setFavourites] = useState([]);

  const removeFromFavourites = (recipe) => {
    const updated = favourites.filter(favourite => favourite.idMeal !== recipe.idMeal);
    localStorage.setItem('favourites',JSON.stringify(updated));
    setFavourites(updated);
    toast.success("Recipe removed from favourites successfully!")
  }

  useEffect(() => {
    setFavourites(JSON.parse(localStorage.getItem('favourites')));
  },[]);

  return (
    <section className="flex flex-col mx-auto w-[70vw] mt-[100px]">
        <h1 className="font-[700] text-3xl">Your Favourite Meals</h1>
        <span className="text-gray-500 pt-4">Quick access to the dishes you love. Remove any at any time.</span>
        <div className="pt-6 grid md:grid-cols-3 grid-cols-1 gap-4">
            {favourites === null || favourites.length === 0? 
                <div className="text-center text-2xl pt-4 w-[70vw]">You haven't marked any recipes as favourite yet!</div> :
                favourites.map((favourite) => {
                    return (
                        <Link key={favourite.idMeal} to={`/recipe/${favourite.idMeal}`} className="shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-xl cursor-pointer">
                            <img className="max-h-[200px] w-full rounded-xl" src={favourite.strMealThumb} alt="favourite recipe image" />
                            <div className="flex flex-col items-center justify-center bg-white rounded-xl">
                                <span className="font-[600] pt-4">{favourite.strMeal}</span>
                                <span className="text-gray-500">{favourite.strCategory} - {favourite.strArea}</span>
                                <button onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    removeFromFavourites(favourite);
                                }} className="transform active:scale-90 transition-transform duration-150 font-semibold text-white mt-2 mb-4 pb-2 pt-2 pr-2 pl-2 rounded-xl cursor-pointer bg-[#e85d44]">Remove from favourites</button>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </section>
  )
}

export default FavouritesPage