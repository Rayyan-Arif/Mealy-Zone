import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

const CategoryPage = () => {
  const {name} = useParams();
  const [recipe, setRecipe] = useState([]);
  const [recipesPerPage, setRecipesPerPage] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const nextPage = async() => {
    const temp_recipe = await Promise.all(
      recipe.slice(pageNumber*12,(pageNumber+1)*12).map(async(rec) =>{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${rec.idMeal}`);
        const data = await res.json();
        return data.meals[0];
      })  
    );

    setRecipesPerPage(temp_recipe);
    setPageNumber(prev => prev + 1);
  }

  const prevPage = async() => {
    const temp_recipe = await Promise.all(
      recipe.slice((pageNumber-2)*12,(pageNumber-1)*12).map(async(rec) =>{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${rec.idMeal}`);
        const data = await res.json();
        return data.meals[0];
      })  
    );
    setRecipesPerPage(temp_recipe);
    setPageNumber(prev => prev - 1);
  }
  
  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
      const data = await res.json();
      setRecipe(data.meals);

      const temp_recipe = await Promise.all(
        data.meals.slice(0,12).map(async(rec) => {
          const res2 = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${rec.idMeal}`);
          const data2 = await res2.json();
          return data2.meals[0];
        })
      );

      setRecipesPerPage(temp_recipe);
      if(data.meals.length%12 === 0) setTotalPage(Math.trunc(data.meals.length / 12));
      else setTotalPage(Math.trunc(data.meals.length / 12) + 1);
    }
    fetchRecipes();
    setLoading(false);
  },[]);

  return (
    loading ? 
    <div className="mt-[100px]"><Spinner /></div> :
    <section className="w-[70vw] mt-[100px] mx-auto">
      <h1 className="font-[600] text-3xl mb-6">Showing results for {name}...</h1>
      <div className="grid md:grid-cols-4 grid-cols-1 w-full gap-4"> 
        {
          recipesPerPage.map(recipe => {
            return <Card key={recipe.idMeal} featuredRecipe={recipe}/>
          })
        }
      </div>
      <div className="flex mt-6">
        {
          pageNumber > 1 ? <button onClick={prevPage} className="mr-auto font-semibold text-[1.1rem] rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.07)] cursor-pointer transform active:scale-90 transition-transform duration-150 bg-[#e85d44] text-white pl-4 pr-4 pt-2 pb-2">Back</button> : <></>
        }
        {
          pageNumber < totalPage ? <button onClick={nextPage} className="ml-auto font-semibold text-[1.1rem] rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.07)] cursor-pointer transform active:scale-90 transition-transform duration-150 bg-[#e85d44] text-white pl-4 pr-4 pt-2 pb-2">Next</button> : <></>
        }
      </div>
    </section>
  )
}

export default CategoryPage