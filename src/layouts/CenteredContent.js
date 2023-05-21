function CenteredContent({ children }) {
  return (
    <div className="h-full mt-16 transition-colors bg-neutral-100 dark:bg-slate-800">
      <div className="sm:w-4/5 w-full h-full p-3 m-auto shadow-lg transition-colors bg-slate-100 dark:bg-slate-700 text-black dark:text-white">
        {children}
      </div>
    </div>
  );
}

export default CenteredContent;
