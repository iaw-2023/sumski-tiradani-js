import { Pagination } from "@mui/material";

function CamisetasPaginator({ cantidad, pageSize, setPage }) {
  const handlePageChange = (event, page) => {
    setPage(page);
  };

  if (cantidad !== 0)
    return (
      <div className="flex justify-center align-middle p-2 bg-neutral-300 dark:bg-slate-700 rounded-md">
        <Pagination
          count={Math.ceil(cantidad / pageSize)}
          onChange={handlePageChange}
        />
      </div>
    );
  else return <></>;
}

export default CamisetasPaginator;
