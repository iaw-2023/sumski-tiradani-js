import Box from "./Box";

function ResponsiveGridLayout({ children }) {
  return (
    <body>
      <div class=" dark:bg-slate-700  w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 ">
        {/* <aside class="bg-neutral-200 dark:bg-slate-800 md:w-1/3 lg:w-1/4 p-4 gap-2 rounded-lg">
          <div class="text-2xl md:text-4xl">{children[0]}</div>
        </aside> */}
        <Box>
          <div class="text-2xl md:text-4xl">{children[0]}</div>
        </Box>
        <main class="grid grid-cols-1 bg-neutral-200 dark:bg-slate-800 md:w-2/3 sm:grid-cols-2 md:grid-cols-4 lg:w-3/4 p-4 gap-2 md:gap-4 m-auto rounded-lg">
          {children[1]}
        </main>
      </div>
    </body>
  );
}

export default ResponsiveGridLayout;
