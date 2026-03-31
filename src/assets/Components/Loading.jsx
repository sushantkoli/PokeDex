

const Loading = () => {
return (
    <div className="flex flex-col items-center justify-center h-screen bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500">
      
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-6"></div>

      {/* Text */}
      <h1 className="text-white text-3xl font-bold tracking-wide animate-pulse">
        Loading Pokédex...
      </h1>

      {/* Bouncing dots */}
      <div className="flex space-x-2 mt-4">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-150"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-300"></div>
      </div>

    </div>
  );
};


export default Loading;