import { Link } from "react-router-dom";

const Card = ({featuredRecipe}) => {
  return (
    <Link to={`/recipe/${featuredRecipe.idMeal}`} key={featuredRecipe.idMeal} className="w-full shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-xl text-center flex flex-col">
        <img className="w-full max-h-[170px] rounded-xl object-cover" src={featuredRecipe.strMealThumb} alt="Featured Image" />
        <div className="flex flex-col justify-evenly p-2 bg-white rounded-xl flex-1 pt-2 pb-2">
            <span className="font-semibold text-sm md:text-base">{featuredRecipe.strMeal}</span>
            <span className="text-xs md:text-sm text-gray-500">{featuredRecipe.strCategory} - {featuredRecipe.strArea}</span>
        </div>
    </Link>
  )
}

export default Card