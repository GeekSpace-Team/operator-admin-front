import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div>
      <Searc>
        <div>
          <input type="text" placeholder="Gozleg" />
        </div>
        <SearchIconn>
          <SearchIcon />
        </SearchIconn>
      </Searc>
    </div>
  );
};

export const Searc = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 380px;
    input {
      border: none;
      box-shadow: 0px 0px 10px rgba(3, 3, 3, 0.15);
      background-color: #363636;
      border-radius: 16px;
      width: 318px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      outline: none;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;
export const SearchIconn = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 7px;
  left: 2px;
  color: #5e9cce;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.15s;
`;
export default Search;
