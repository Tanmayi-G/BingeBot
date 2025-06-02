type TVideoTitle = {
  title: string;
  overview: string;
};

const VideoTitle = ({ title, overview }: TVideoTitle) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black flex flex-col justify-center px-12 text-white z-10">
      <h1 className="text-6xl font-bold mb-6">{title}</h1>
      <p className="text-lg w-1/4 mb-6">{overview}</p>
      <div>
        <button
          className="mr-3 px-4 py-3 w-40 rounded bg-[rgba(255,255,255,0.7)] text-black text-lg font-bold cursor-pointer 
  hover:bg-[rgba(255,255,255,0.9)] hover:scale-105 transition-all duration-200 shadow hover:shadow-lg"
        >
          ▶︎ Play
        </button>
        <button
          className="ml-3 px-4 py-3 w-40 rounded bg-[rgba(75,75,75,0.7)] text-white text-lg font-bold cursor-pointer 
  hover:bg-[rgba(75,75,75,0.85)] hover:scale-105 transition-all duration-200 shadow hover:shadow-lg"
        >
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
