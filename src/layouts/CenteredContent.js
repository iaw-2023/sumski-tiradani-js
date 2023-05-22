function CenteredContent({ children }) {
  return (
    <div className="min-h-full max-h-fit mt-16 transition-colors bg-neutral-100 dark:bg-slate-800">
      <div className="sm:w-4/5 w-full min-h-full max-h-fit p-4 pt-5 m-auto space-y-4 shadow-lg transition-colors bg-slate-100 dark:bg-slate-700 text-black dark:text-white">
        {children}
      </div>
    </div>
  );
}

export default CenteredContent;
