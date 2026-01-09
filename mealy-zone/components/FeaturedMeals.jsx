import { useState } from "react";
import { useEffect } from "react"
import Card from "./Card";
import Spinner from "./Spinner";

const FeaturedMeals = () => {
  const [featured, setFeatured] = useState([]);  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedRecipe = async() => {
        let data = [];
        let recipe1 = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772');
        let recipe2 = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52773');
        let recipe3 = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52774');
        let recipe4 = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52775');
        recipe1 = await recipe1.json();
        recipe2 = await recipe2.json();
        recipe3 = await recipe3.json();
        recipe4 = await recipe4.json();
        data.push(recipe1.meals[0]);
        data.push(recipe2.meals[0]);
        data.push(recipe3.meals[0]);
        data.push(recipe4.meals[0]);
        setFeatured(data);
        setLoading(false);
    }
    fetchFeaturedRecipe();
  }, []);

  return (
    loading ? 
    <Spinner /> :
    <section className="w-full max-w-[70vw] mt-12 md:mt-[10px] mb-8 cursor-pointer block relative">
        <span className="w-full text-[1rem] md:text-[1.2rem] font-bold">Featured Meals</span>
        <div className="w-full mt-[10px] flex flex-col md:flex-row justify-evenly gap-4">
            {
                featured.map(featuredRecipe => {
                    return(
                        <Card key={featuredRecipe.idMeal} featuredRecipe={featuredRecipe}/>
                    )
                })
            }
        </div>
    </section>
  )
}

export default FeaturedMeals