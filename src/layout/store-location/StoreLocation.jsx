import { Stack } from "@mui/material";
import React from "react";
import { data } from "./Data";
import Delete from "./Delete";
import Header from "./Header";
import Open from "./Open";
import "../../style/store/store.css";

const StoreLocation = () => {
  return (
    <div className="store container">
      <Header />
      <div className="storeTable">
        <div className="moderatorTableTitle">
          <Stack direction="row" mt={1}>
            {data.map((item, i) => {
              return <label>{item.title}</label>;
            })}
          </Stack>
        </div>
        <div className="hr"></div>
        <div className="moderatortbleItems storetableItem">
          <Stack direction="row">
            <label>121</label>
            <label>Maraton</label>
            <label>
              Ashgabat shaher koche <br /> jay,...
            </label>
            <label>+99363636363</label>
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

export default StoreLocation;
