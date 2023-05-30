const FancyButtonAlt = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      class="w-full relative inline-flex items-center justify-center px-4 py-2 overflow-hidden rounded-lg shadow-2xl group"
    >
      <span class="absolute top-0 left-0 w-full h-40 -mt-10 -ml-3 transition-all duration-700 bg-purple-500 rounded-full blur-md ease"></span>
      <span class="absolute inset-0 w-full h-full transition duration-700 blur-md">
        <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-blue-200 rounded-full blur-md"></span>
        <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-200 rounded-full blur-md"></span>
      </span>
      <span class="absolute inset-0 w-full h-full transition duration-700 blur-md group-hover:rotate-180 ease">
        <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-green-500 rounded-full blur-md"></span>
        <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
      </span>
      <span class="relative text-white font-semibold">{text}</span>
    </button>
  );
};

export default FancyButtonAlt;
