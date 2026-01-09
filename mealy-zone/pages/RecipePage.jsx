import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const RecipePage = () => {
  const { id } = useParams();
  const [recipe , setRecipe] = useState({});
  const [ingredientsCount, setIngredientsCount] = useState(0);
  const [ingredients, setIngredients] = useState([]);
  const [measurements, setMeasurements] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [loading, setLoading] = useState(true);
  let count = 0;
  let temp_ingredients = [], temp_measurements = [];

  const addToFavourite = () => {
    let favourites = JSON.parse(localStorage.getItem('favourites'));
    if(favourites === null) favourites = [];
    if(!favourites.some(favourite => favourite.idMeal === recipe.idMeal)){
        favourites.push(recipe);
        toast.success('Recipe added to favourites successfully!');
    } else{
        toast.error("Recipe already in favourites!");
    }
    localStorage.setItem('favourites',JSON.stringify(favourites));
  }

  useEffect(() => {
    const fetchRecipe = async () => {
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await res.json();
            while(data.meals[0][`strIngredient${count+1}`] !== undefined && data.meals[0][`strIngredient${count+1}`] !== null && data.meals[0][`strIngredient${count+1}`]?.length !== 0){
                temp_ingredients.push(data.meals[0][`strIngredient${count+1}`]);
                temp_measurements.push(data.meals[0][`strMeasure${count+1}`]);
                count++;
            }
            setRecipe(data.meals[0]);
            setIngredientsCount(count);
            setIngredients(temp_ingredients);
            setMeasurements(temp_measurements);
            setInstructions(data.meals[0].strInstructions.split(/\r?\n/).filter(step => step.trim() !== '').map(step => {
                if (step[0] >= '0' && step[0] <= '9' && step[1] === ')') {
                return step.slice(2).trim();
                }
                return step.trim();
            }));
        } catch(error){
            console.log(error);
        } finally{
            setLoading(false);
        }
    };
    fetchRecipe();
}, []);

  return (
    loading ?
    <div className="mt-[100px]"><Spinner /></div> :
    <section className="mt-[100px] w-[70vw] mx-auto flex flex-col gap-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 auto-rows-auto">
            <div>
                <img className="w-full h-full max-h-[320px] rounded-xl" src={recipe.strMealThumb} alt="recipe image" />
            </div>
            <div className="flex flex-col justify-center gap-4 items-center">
                <h1 className="font-bold text-4xl">{recipe.strMeal}</h1>
                <div className="flex gap-4">
                    <span className="bg-[#fff5ef] text-[#e85d44] font-bold w-fit px-3 py-1 text-center border border-[#ffd9cc] shadow-[0_12px_40px_rgba(0,0,0,0.07)] rounded-xl">{recipe.strArea}</span>
                    <span className="bg-[#fff5ef] text-[#e85d44] font-bold w-fit px-3 py-1 text-center border border-[#ffd9cc] shadow-[0_12px_40px_rgba(0,0,0,0.07)] rounded-xl">{recipe.strCategory}</span>
                </div>
                <p className="text-gray-500 text-center">This dish is made of {ingredientsCount} ingredients - {ingredientsCount > 9 ? 'Pretty large dish, is it? ' : 'Easy to make this! '}
                    Don't stop here, continue browsing for more - You can add this to favourites as well!
                </p>
                <button onClick={addToFavourite} className="bg-[#e85d44] text-white pl-2 pr-2 pt-2 pb-2 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.07)] font-[700] cursor-pointer transform active:scale-90 transition-transform duration-150">Add To Favourites</button>
            </div>
            <div className="bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.07)]">
                <h1 className="text-[1.2rem] font-[700] pl-6 pt-2 pb-4">Ingredients</h1>
                <ul className="list-disc pl-10 space-y-2">
                    {
                        ingredients.map((ingredient, i) => {
                            return (
                                <li key={i+1} className="text-[#1F1F35]">{ingredient}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.07)]">
                <h1 className="text-[1.2rem] font-[700] pl-6 pt-2 pb-4">Measurements</h1>
                <ul className="list-disc pl-10 space-y-2 pb-2">
                    {
                        measurements.map((measurement, i) => {
                            return (
                                <li key={i+1} className="text-[#1F1F35]">{ingredients[i]} - {measurement}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        <div className="bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.07)]">
            <h1 className="font-[700] pl-6 pt-2 pb-4 text-[1.2rem]">Instructions</h1>
            <ol className="pl-6 space-y-6 pb-4 list-decimal list-inside marker:font-bold">
                {
                    instructions.map((instruction, i) => {
                        return (
                            <li key={i+1} className="text-[#1F1F35] mr-6 border pt-2 pb-2 pl-2 rounded-xl border-[#e6e4df]">{instruction}</li>
                        )
                    })
                }
            </ol>
        </div>
        <div className="border bg-[#fff5ef] rounded-xl border-[#ffd9cc] flex flex-col shadow-[0_12px_40px_rgba(0,0,0,0.07)]">
            <h1 className="font-[700] pl-6 pt-4">Recipe Tutorial</h1>
            <div className="flex md:flex-row flex-col items-center md:pl-6 md:pt-3 md:pb-4">
                <span className="text-[#1F1F35]">Follow this tutorial for complete guide:</span>
                <a className="ml-5 text-[#e85d44]" href={recipe.strYoutube ? recipe.strYoutube : `/categories/${recipe.strCategory}`}>{recipe.strYoutube ? (recipe.strYoutube?.length > 40 ? recipe.strYoutube?.slice(0,41) + '........' : recipe.strYoutube) : 'No tutorial for this recipe! Go back by clicking on this.'}</a>
            </div>   
        </div>
    </section>
  )
}

export default RecipePage