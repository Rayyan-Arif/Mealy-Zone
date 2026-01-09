// import Category from "../components/Category"
import CategoryComponent from "../components/CategoryComponent"
import FeaturedMeals from "../components/FeaturedMeals"
import Hero from "../components/Hero"

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center relative pt-16 gap-8">
        <Hero />
        <CategoryComponent isHome={true}/>
        <FeaturedMeals />
    </div>
  )
}

export default HomePage