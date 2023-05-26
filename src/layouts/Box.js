const Box = ({ children }) => {
  return (
    <div className="flex flex-col w-100 p-4 space-y-4 rounded-lg transition-colors bg-neutral-200 dark:bg-slate-800 text-black dark:text-white">
      {children}
    </div>
  );
};

export default Box;
