import { Stack } from "@mui/material";
import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div>
      <Stack justifyContent={"center"} mt={20} alignItems={"center"}>
        <ReactLoading type={"spin"} color="#F61A1A" height={50} width={50} />
      </Stack>
    </div>
  );
};

export default Loading;
