const BoxAlt = ({ children }) => {
  return (
    <div className="flex flex-col w-100 p-4 space-y-2 rounded-lg transition-colors bg-neutral-300 dark:bg-slate-700  text-black dark:text-white">
      {children}
    </div>
  );
};

export default BoxAlt;
