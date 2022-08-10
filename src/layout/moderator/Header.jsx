import React from "react";
import Search from "../../view/common-view/Search";
import { Button, Grid, Stack } from "@mui/material";

const Header = () => {
  return (
    <div>
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        columns={12}
        alignItems={"center"}
      >
        <Grid item md={6} lg={6} className="header">
          <label>Moderatorlar</label>
        </Grid>
        <Grid item lg={6} md={6}>
          <Stack
            justifyContent={"flex-end"}
            direction="row"
            alignItems="center"
            spacing={3}
          >
            <Search />
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
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
