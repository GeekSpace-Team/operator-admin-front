import { Stack } from "@mui/material";
import React from "react";

const Empty = () => {
  return (
    <div>
      <Stack justifyContent={"center"} mt={20} alignItems={"center"}>
        <img src="/svg/empty.svg" alt="#" width={"100px"} />
        <p style={{ color: "#F61A1A", fontSize: "22px", fontFamily: "nunito" }}>
          Maglumat yok !
        </p>
      </Stack>
    </div>
  );
};

export default Empty;
