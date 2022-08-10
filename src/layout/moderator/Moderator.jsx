import React from "react";
import Header from "./Header";
import { data } from "./Data";
import { Stack } from "@mui/material";
import Open from "./Open";
import Delete from "./Delete";
import "../../style/moderator/moderator.css";

const Moderator = () => {
  return (
    <div className="moderator container">
      <Header />
      <div className="moderatorTable">
        <div className="moderatorTableTitle">
          <Stack direction="row" mt={1}>
            {data.map((item, i) => {
              return <label>{item.title}</label>;
            })}
          </Stack>
        </div>
        <div className="hr"></div>
        <div className="moderatortbleItems">
          <Stack direction="row">
            <label>Amanow Aman</label>
            <label>123</label>
            <label>a123</label>
            <label>Active</label>
            <Stack direction="row" spacing={3}>
              <Open />
              <Delete />
            </Stack>
          </Stack>
        </div>
        <div className="hr"></div>
      </div>
    </div>
  );
};

export default Moderator;
