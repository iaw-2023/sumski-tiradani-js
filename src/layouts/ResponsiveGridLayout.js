function ResponsiveGridLayout({ children }) {
  return (
    <body>
      <div class=" dark:bg-slate-900 my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 ">
        <aside class="bg-neutral-200 dark:bg-slate-900 md:w-1/3 lg:w-1/4 px-5 py-40 gap-2">
          <h1 class="text-2xl md:text-4xl">{children[0]}</h1>
        </aside>
        <main class="grid grid-cols-1 bg-neutral-200 dark:bg-slate-900 md:w-2/3 sm:grid-cols-2 md:grid-cols-4 lg:w-3/4 p-4 gap-2 md:gap-4 m-auto">
          {children[1]}
        </main>
      </div>
    </body>
  );
}

export default ResponsiveGridLayout;
