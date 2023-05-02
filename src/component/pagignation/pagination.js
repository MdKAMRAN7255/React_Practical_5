import React from "react";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { showData } from "../../action/indexAction";
import { useDispatch } from "react-redux";

const Pagignation = () => {
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(0);

  //Fetching data only when page is render(loading)/refresh for the first time.
  useEffect(() => {
    const getUserData = async () => {
      const { data } = await axios.get("https://reqres.in/api/users?page=1");

      //getting total no. of available page from api from dynamic page no.
      //Adding one page extra than available page at end to show no more data message to user for better experience
      setTotalPages(data.total_pages + 1);

      dispatch(showData(data.data));
    };
    getUserData();
  }, []);

  //fetching data from api whenever page is switching from Page 1-2.
  const getUserData = async (id) => {
    const { data } = await axios.get(`https://reqres.in/api/users?page=${id}`);
    dispatch(showData(data.data));
  };

  const handlePageClick = (data) => {
    //fetching current page data
    const currently = data.selected + 1;
    getUserData(currently);
  };
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
