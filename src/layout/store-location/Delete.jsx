import React from "react";
import { Box, Button, Modal, Stack } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "59%",
  transform: "translate(-50%, -50%)",
  width: "38%",
  display: "block",
  borderRadius: "16px",
  bgcolor: "#363636",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const Delete = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          textTransform: "none",
          borderRadius: "16px",
          background: "#F61A1A",
          fontSize: "14px",
          fontWeight: "600",
        }}
        variant="contained"
      >
        Delete
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <span style={{ fontWeight: "600", fontSize: "18px" }}>
            Siz <label>"Amanow Aman"</label>atly hasabynyzy hakykatdanam <br />
            pozmak isleyanizmi ?
          </span>
          <Stack direction="row" spacing={4} mt={3} justifyContent={"center"}>
            <Button
              style={{
                textTransform: "none",
                fontWeight: "600",
                borderRadius: "16px",
                width: "120px",
              }}
              variant="outlined"
            >
              Yok
            </Button>
            <Button
              variant="contained"
              style={{
                textTransform: "none",
                fontWeight: "600",
                borderRadius: "16px",
                background: "#5E9CCE",
                width: "120px",
              }}
            >
              Hawa
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default Delete;
