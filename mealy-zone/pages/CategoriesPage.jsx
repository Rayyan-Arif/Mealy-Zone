import Category from "../components/Category";

const CategoriesPage = () => {
  return (
    <section className="flex flex-col mt-[100px] w-[70vw] mx-auto">
      <h1 className="text-3xl font-bold">Browse by category</h1>
      <span className="text-gray-500 pt-4 pb-4">Different categories of food available. Browse according to your interest.</span>
      <Category isHome={false}/>
    </section>
  )
}

export default CategoriesPage