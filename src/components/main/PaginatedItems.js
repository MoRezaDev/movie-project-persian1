import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./PaginatedItems.css";

import { Button, styled } from "@mui/material";

import SectionRight from "./SectionRight/SectionRight";
import SmallSectionRight from "./SectionRight/SmallSectionRight";

const StyledButton = styled(Button)({
  backgroundColor: "#242424",
  borderRadius: "1rem",
  padding: "3px",
  "&:hover": {
    backgroundColor: "#DE3163",
  },
});

const PaginatedItems = ({ data, itemsPerPage, component }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.posts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data && data.posts.slice(itemOffset, endOffset));
    setPageCount(data && Math.ceil(data.posts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  console.log("current", currentItems);

  if (currentItems)
    return (
      <div>
        {component === "default"
          ? currentItems.map((post) => (
              <SectionRight key={post.id} postData={post} />
            ))
          : currentItems.map((post) => (
              <SmallSectionRight key={post.id} postData={post} />
            ))}
        <ReactPaginate
          activeLinkClassName="active-link"
          containerClassName="container-paginate"
          pageClassName="page-container"
          pageLinkClassName="page-link"
          breakLabel="..."
          nextLabel={<StyledButton variant="contained">بعدی</StyledButton>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<StyledButton variant="contained">قبلی</StyledButton>}
          renderOnZeroPageCount={null}
        />
      </div>
    );
};

export default PaginatedItems;
