/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useState } from "react";

const useListView = ({ getAPI }: IUseListView) => {
  const [isLoading, setisLoading] = useState(false);
  const [pagination, setPagination] = useState({
    page: 0,
    pagelength: 0,
    pageSize: 50,
  });
  const [filters, setFilters] = useState<Ifilters>({
    query: "",
  });
  const [data, setData] = useState([]);
  const [apiData, setApiData] = useState([]);

  const handleFilterChange = (e: any) => {
    setFilters((prev: Ifilters) => ({ ...prev, query: e.target.value }));
    console.log(e.target.value)
    setData(apiData.filter((item: any) => item.name.first.toLowerCase().includes(e.target.value)));  // render filtered data
  };

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setisLoading(true);
    getAPI({
      maxLimit: pagination.pageSize,
      page: newPage+1,
    }).then(
      (posts: {
        data: SetStateAction<never[]>;
        pagination: { page: number; pagelength: any; pageSize: any };
      }) => {
        // response handling
        setData(posts.data);
        setApiData(posts.data);
        setPagination({
          page: posts.pagination.page - 1,
          pagelength: posts.pagination.pagelength,
          pageSize: posts.pagination.pageSize,
        });
      }
    );
    setisLoading(false);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setisLoading(true);
    getAPI({
      maxLimit: parseInt(event.target.value, 10),
      page: 1,
      query: filters.query,
    }).then(
      (posts: {
        data: SetStateAction<never[]>;
        pagination: { page: number; pagelength: any; pageSize: any };
      }) => {
        // response handling
        setData(posts.data);
        setApiData(posts.data);
        setPagination({
          page: posts.pagination.page - 1,
          pagelength: posts.pagination.pagelength,
          pageSize: posts.pagination.pageSize,
        });
      }
    );
    setisLoading(false);
  };

  const handleGetInitialData = (init: object) => {
    setisLoading(true);
    getAPI(init).then(
      (posts: {
        data: SetStateAction<never[]>;
        pagination: { page: number; pagelength: number; pageSize: number };
      }) => {
        // response handling
        setData(posts.data);
        setApiData(posts.data);
        setPagination({
          page: posts.pagination.page - 1,
          pagelength: posts.pagination.pagelength,
          pageSize: posts.pagination.pageSize,
        });
      }
    );
    setisLoading(false);
  };

  return {
    isLoading,
    setisLoading,
    data,
    setData,
    pagination,
    setPagination,
    handleGetInitialData,
    filters,
    setFilters,
    handleFilterChange,
    handleChangeRowsPerPage,
    handleChangePage,
  };
};

export default useListView;
