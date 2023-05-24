import Box from "./Box";

function ResponsiveGridLayout({ children }) {
  return (
    <>
      <div className="w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 ">
        <div className="space-y-4">
          <Box>
            <p className="text-bold text-xl">Categorias</p>
          </Box>
          <Box>{children[0]}</Box>
        </div>

        <Box>
          <main className="w-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {children[1]}
          </main>
        </Box>
      </div>
    </>
  );
}

export default ResponsiveGridLayout;
