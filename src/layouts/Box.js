const Box = ({ children }) => {
  return (
    <div className="flex flex-col w-100 p-4 rounded-lg transition-colors bg-neutral-200 dark:bg-slate-800">
      {children}
    </div>
  );
};

export default Box;
