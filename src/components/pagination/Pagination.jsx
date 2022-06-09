import React, { useEffect } from "react";
import "./pagination.scss";
import { Link, useLocation } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../Redux/Actions";

function PaginationC({ totalPages }) {
  const location = useLocation();
  const path = location.pathname;
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(page));
  }, [dispatch, page]);

  return (
    <div className="pagination">
      <Pagination
        color="primary"
        size="medium"
        variant="outlined"
        shape="circular"
        page={currentPage}
        count={totalPages}
        siblingCount={0}
        sx={{
          color: "white",
          "& .MuiPaginationItem-root": {
            color: "black",
          },
        }}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`${path}${item.page === 1 ? "" : `?page=${item.page}`}`}
            {...item}
          />
        )}
      />
    </div>
  );
}

export default PaginationC;
