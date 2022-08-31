import React from "react";
import Search from "../../view/common-view/Search";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import AddModerator from "./AddModerator";

const Header = (props) => {
  const classes = makeStyles(ownStyles)();
  return (
    <div>
 
    </div>
  );
};

export default Header;

function ownStyles() {
  return {
    title: {
      color: "#fefefe",
      fontSize: "22px",
      fontWeight: "600",
    },
  };
}
