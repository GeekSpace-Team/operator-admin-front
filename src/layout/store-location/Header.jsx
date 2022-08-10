import { Button, Stack } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        className="header"
      >
        <label>Sowda nokatlar</label>
        <Button
          style={{
            textTransform: "none",
            letterSpacing: "1px",
            borderRadius: "16px",
            background: "#5E9CCE",
            fontWeight: "600",
            height: "33px",
          }}
          variant={"contained"}
        >
          Goshmak
        </Button>
      </Stack>
    </div>
  );
};

export default Header;
