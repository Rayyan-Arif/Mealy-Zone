const AboutPage = () => {
  return (
    <section className="w-[70vw] min-h-[500px] mt-[100px] mx-auto flex flex-col justify-evenly">
        <span className="text-4xl font-bold">About Mealy Zone</span>
        <span className="text-gray-500 mt-[10px]">A simple recipe explorer that surfaces meals by category, search, and your own favorites.</span>
        <div className="w-full flex flex-col justify-evenly items-center h-[15vh] bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
            <span className="text-2xl font-bold">Mission</span>
            <p>Make it effortless to discover, save, and cook meals you will love. 
            The mission of this app is to make cooking easier to learn.</p>
        </div>
        <div className="w-full md:h-[15vh] h-[30vh] flex justify-between items-center">
            <div className="w-[31%] h-full bg-white flex flex-col items-center justify-evenly rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)]">
                <span className="font-bold">Credits</span>
                <span className="text-center text-gray-500">Developed By Rayyan Arif</span>
                <span className="text-center text-gray-500">Data provided by TheMealDB</span>
            </div>
            <div className="w-[31%] h-full bg-white flex flex-col items-center justify-evenly rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)]">
                <span className="font-bold">Tech</span>
                <p className="text-center text-gray-500">This app is built in React and Tailwind CSS. It is fully frontend. No Backend Yet!</p>
            </div>
            <div className="w-[31%] h-full bg-white flex flex-col items-center justify-evenly rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)]">
                <span className="font-bold">Contact</span>
                <div className="text-center text-gray-500 flex flex-col">
                    <span className="text-[2vw] md:text-base">- Email: rayyanarif114@gmail.com</span>
                    <a className="text-[2vw] md:text-base" target="blank" href="https://github.com/Rayyan-Arif">- Click here to reach github</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutPage