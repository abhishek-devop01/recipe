const Home = () => {
  
  return (
    <div className="bg-neutral-900 text-white min-h-screen px-10 py-16">
      {/* Hero Section */}
      <div className="relative bg-[url('/images/Myimg.jpeg')] bg-cover bg-center rounded-3xl overflow-hidden h-[500px] shadow-xl">
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Share Your First Recipe</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Unleash the chef inside you. Share your delicious creations with the world.
          </p>
          <div className="flex gap-6 mt-8">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
              Start Writing
            </button>
            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Join Discord
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-4xl font-bold mb-10 text-center">Trending Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <div className="h-56 bg-[url('/images/Myimg.jpeg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Recipe Title</h3>
                <p className="text-sm text-gray-300">
                  A short description of the recipe to entice users to click and view more.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
