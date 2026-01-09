import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="mt-[35vh] mx-auto max-w-[50vw] shadow-[0_0_20px_rgba(0,0,0,0.1)] bg-white rounded-xl flex flex-col items-center justify-evenly gap-4">
        <h1 className="text-4xl font-bold pt-6">404</h1>
        <span className="text-gray-500 text-center pr-4 pl-4">We could not find that recipe. Please enter correct recipe.</span>
        <Link to='/' className="rounded-xl cursor-pointer mb-6 pt-2 pb-2 pr-2 pl-2 bg-[#e85d44] font-semibold text-white flex justify-center items-center transform active:scale-90 transition-transform duration-150">Go To Home</Link>
    </section>
  )
}

export default NotFoundPage