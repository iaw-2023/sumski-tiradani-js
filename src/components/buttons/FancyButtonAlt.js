const FancyButtonAlt = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="w-full relative inline-flex items-center justify-center px-4 py-2 overflow-hidden rounded-lg shadow-2xl group border border-neutral-500 dark:border-neutral-400"
      aria-label={"Botón " + text}
    >
      <span className="absolute top-0 left-0 w-full h-40 -mt-10 -ml-3 transition-all duration-700 bg-purple-600 rounded-full blur-md ease"></span>
      <span className="absolute inset-0 w-full h-full transition duration-700 blur-md">
        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-blue-300 rounded-full blur-md"></span>
        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-300 rounded-full blur-md"></span>
      </span>
      <span className="absolute inset-0 w-full h-full transition duration-700 blur-md group-hover:rotate-180 ease">
        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-green-500 rounded-full blur-md"></span>
        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
      </span>
      <p className="relative text-neutral-100 font-semibold ">{text}</p>
    </button>
  );
};

export default FancyButtonAlt;
