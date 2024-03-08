/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@mui/material";
import CustomDataGrid from "../../CustomDataGrid";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useListView from "../../../hooks/useListView";

const CustomList = ({ addLink, addLinkTitle, getAPI, columnsDef }: any) => {
  const {
    isLoading,
    data,
    filters,
    pagination,
    handleChangeRowsPerPage,
    handleChangePage,
    handleGetInitialData,
    handleFilterChange,
  } = useListView({
    getAPI: (payload: any) => getAPI(payload),
  });

  const column = columnsDef();
  useEffect(() => {
    handleGetInitialData({ maxLimit: 50, page: 1, query: null });
  }, []);

  return (
    <>
      <CustomDataGrid
        title={
          <input
            type="text"
            placeholder="Search"
            value={filters.query}
            onChange={handleFilterChange}
            className="w-full md:w-auto text-sm bg-grey p-2 md:pr-1 rounded-full placeholder:text-dark-grey md:pl-6 placeholder:text-sm"
          />
        }
        isloading={isLoading}
        action={
          <Link to={addLink}>
            <Button variant="outlined" disabled>{addLinkTitle}</Button>
          </Link>
        }
        columns={column}
        rows={data}
        pagelength={pagination.pagelength}
        disableRowSelectionOnClick={true}
        disableColumnSelector={true}
        page={pagination.page}
        handleChangePage={handleChangePage}
        rowsPerPage={pagination.pageSize}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        getRowId={(row: any) => row.email}
      />
    </>
  );
};

export default CustomList;
