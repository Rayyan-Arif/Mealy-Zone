import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom";
import Spinner from '../components/Spinner';

const Category = ({ isHome }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async() => {
        try{
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            const data = await res.json();
            if(isHome) setCategories(data.categories.slice(0,4));
            else setCategories(data.categories);
        } catch(error){
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    fetchCategories();
  },[]);

  return (
    loading ? 
    <Spinner /> :
    <section className="w-full max-w-[70vw] mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 relative" href="/">
        {
            categories?.map((category) => {
                return (
                    <div key={category.idCategory} className="w-full shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-xl">
                        <img className="rounded-xl w-full max-h-[200px] border-b object-cover" src={category?.strCategoryThumb} alt="Category Image" />
                        <div className="w-full bg-white flex flex-col justify-evenly rounded-xl p-2">
                            <span className="w-full font-semibold text-center text-sm md:text-base">{category?.strCategory}</span>
                            <Link to={`/categories/${category.strCategory}`} className="mt-2 mb-2 block w-1/2 bg-blue-500 text-white font-semibold rounded-xl cursor-pointer relative left-1/4 text-center text-xs md:text-sm py-1 md:py-2 transform active:scale-90 transition-transform duration-150">Click For More</Link>
                        </div>
                    </div>
                )
            })
        }
    </section>
  )
}

export default Category