import Category from "./Category"

const CategoryComponent = ({isHome}) => {
  return (
    <div className="w-full max-w-[70vw] relative mt-12 md:mt-[5%] mb-8">
      <div className="flex justify-between w-full h-[15%] mb-4">
        <span className="font-bold text-[1.2rem]">Browse by category</span>
        <a href="/categories" className="block text-[#e85d44] font-bold cursor-pointer">View All</a>
      </div>
      <Category isHome={isHome}/>
    </div>
  )
}

export default CategoryComponent