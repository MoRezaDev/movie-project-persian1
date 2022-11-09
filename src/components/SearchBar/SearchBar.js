import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useClickOutside } from "react-click-outside-hook";

import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../../graphql/query";
import useDebounce from "../../hooks/useDebounce";

const Search = styled("div")(({ theme }) => ({
  overflow: "auto",
  zIndex: "1000",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.9),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  left: "0",
  top: "6px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

const searchResultStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: ".5rem",
  marginBottom: ".5rem",
  borderBottom: "1px solid silver",
};

const SearchBar = () => {
  const { loading, data } = useQuery(GET_ALL_POSTS);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [searchBarRef, isClickedOutside] = useClickOutside();

  const calculateResult = () => {
    if (data) {
      const filteredData = data.posts.filter((post) =>
        post.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      filteredData && searchValue.length > 0 && setSearchResult(filteredData);
    }
  };

  const collapseSearchMenu = () => {
    setSearchResult([]);
    setSearchValue("");
  };

  useEffect(() => {
    if (searchValue.length === 0) {
      setSearchResult([]);
    }
  }, [searchValue]);

  useEffect(() => {
    if (isClickedOutside) collapseSearchMenu();
  }, [isClickedOutside]);

  useDebounce(searchValue, 600, calculateResult);

  console.log("loading", loading + "data", data);
  console.log("results: ", searchResult);

  return (
    <Search ref={searchBarRef}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="جستجو"
        inputProps={{ "aria-label": "search" }}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <motion.div style={{ transition: "all .2s ease-in-out" }}>
        {searchResult &&
          searchResult.map((post, idx) => (
            <div style={searchResultStyle} key={idx}>
              <img
                alt="searchIcon"
                style={{ width: "50px", height: "50px", objectFit: "contain" }}
                src={post.coverPhoto.url}
              />
              <Link
                style={{ textDecoration: "none", color: "black" }}
                onClick={collapseSearchMenu}
                to={`/${post.type}/${post.slug}`}
              >
                <h3>{post.name}</h3>
              </Link>
            </div>
          ))}
      </motion.div>
    </Search>
  );
};

export default SearchBar;
