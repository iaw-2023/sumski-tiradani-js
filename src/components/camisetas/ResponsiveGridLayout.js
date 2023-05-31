import Box from "../../layouts/Box";

function ResponsiveGridLayout({ children }) {
  return (
    <>
      <div className="w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 ">
        <div className="space-y-4 w-full md:w-1/6">
          <Box>{children[0]}</Box>
        </div>

        <div className="w-full md:w-5/6">
          <Box>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 pb-4">
              {children[1]}
            </div>
            {children[2]}
          </Box>
        </div>
      </div>
    </>
  );
}

export default ResponsiveGridLayout;
