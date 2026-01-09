import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const searchRecipe = async(name) => {
    name = name.trim();
    if(name.length === 0) navigate('/notfound');
    else{
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
      const data = await res.json();
      if(data.meals === null) navigate('/notfound');
      else navigate(`/recipe/${data?.meals?.[0].idMeal}`);
    }
  }

  const searchRecipeByEnter = (e, name) => {
    if(e.key === "Enter") searchRecipe(name);
  }

  return (
    <section className="w-[90vw] md:w-[70vw] h-auto min-h-[400px] md:h-[25vw] bg-[linear-gradient(135deg,#fff5ef,#ffe8df)] mt-12 md:mt-24 mb-8 md:mb-12 rounded-xl shadow-lg flex flex-col md:flex-row mx-auto relative">
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center px-4 md:px-6 py-6 md:py-0">
            <span className="font-bold text-2xl md:text-3xl tracking-wide text-center">
            Discover tasty meals for every moment
            </span>
            <span className="text-center mt-4 md:mt-5 text-gray-500 text-sm md:text-base">
            Browse by category, search your cravings, or jump into featured picks curated for you.
            </span>

            <div className="flex w-full md:w-[90%] h-10 md:h-[10%] mt-4 md:mt-5 justify-between gap-2 md:gap-3">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => searchRecipeByEnter(e,input)}
                className="flex-1 h-full bg-white rounded-xl px-3"
                type="text"
                placeholder="Search meals here..."
            />
            <button 
                onClick={() => searchRecipe(input)}
                className="h-full w-[30%] md:w-[20%] bg-[#e85d44] text-white font-bold rounded-xl transform active:scale-90 transition-transform duration-150 cursor-pointer"
                type="submit"
            >
                Search
            </button>
            </div>
        </div>
        <div className="w-full md:w-1/2 h-full flex justify-center items-center mt-6 md:mt-0">
            <img
            className="w-[90%] md:w-[90%] rounded-xl object-cover"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
            alt="Food Image"
            />
        </div>
    </section>
  )
}

export default Hero