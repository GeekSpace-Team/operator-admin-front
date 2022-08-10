import React from "react";
import {
  Box,
  Button,
  // Grid,
  // makeStyles,
  Modal,
  // Stack,
  // TextField,
} from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   input: {
//     color: "#FFF",
//   },
// }));

const style = {
  position: "absolute",
  top: "55%",
  left: "59%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "99%",
  overflowY: "scroll",
  display: "block",
  borderRadius: "16px",
  bgcolor: "#363636",
  boxShadow: 24,
  p: 4,
};

const Open = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const classes = useStyles();
  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          textTransform: "none",
          borderRadius: "16px",
          background: "#5E9CCE",
          fontSize: "14px",
          fontWeight: "600",
        }}
        variant="contained"
      >
        Open
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Grid
            container
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            columns={12}
          >
            <Grid item sm={1} md={6} lg={6}>
              <Stack width={"100%"}>
                <TextField variant="standard" style={{ color: "#fefefe" }} />
              </Stack>
            </Grid>
            <Grid item sm={1} md={6} lg={6}>
              <Stack width={"100%"}>
                <TextField
                  id="standard-basic"
                  inputProps={{ className: classes.input }}
                  label="Standard"
                  variant="standard"
                />
              </Stack>
            </Grid>
          </Grid> */}
        </Box>
      </Modal>
    </div>
  );
};

export default Open;
