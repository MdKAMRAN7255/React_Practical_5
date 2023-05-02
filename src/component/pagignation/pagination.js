import React, { useMemo, useCallback, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showData } from "../../action/indexAction";

function Pagignation() {
  const dispatch = useDispatch();
  const [totalPagesData, setTotalPagesData] = useState({ totalPages: 0 });

  // Fetching data only when page is render(loading)/refresh for the first time.
  useEffect(() => {
    const getUserData = async () => {
      const { data } = await axios.get("https://reqres.in/api/users?page=1");

      //getting total no. of available page from api from dynamic page no.
      //Adding one page extra than available page at end to show no more data message to user for better experience
      setTotalPagesData({ totalPages: data.total_pages + 1 });

      dispatch(showData(data.data));
    };
    getUserData();
  }, [dispatch]);


  const getUserData = useCallback(async (id) => {
    const { data } = await axios.get(`https://reqres.in/api/users?page=${id}`);
    dispatch(showData(data.data));
  }, [dispatch]);

  // Memoizing the `totalPages` value
  const totalPages = useMemo(() => totalPagesData.totalPages, [
    totalPagesData.totalPages,
  ]);

  const handlePageClick = useCallback(
    (data) => {
      //fetching current page data
      const currently = data.selected + 1;
      getUserData(currently);
    },
    [getUserData]
  );

  return (
    <>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        pageCount={totalPages}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
}

export default Pagignation;
