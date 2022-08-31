import React from "react";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { AxiosInstance } from "../../api-interface/api/AxiosInstance.mjs";
import { showError, showSuccess } from "../../view/helper/Alert/Alert.jsx";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer } from "react-toastify";

const DeleteCancelReason = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = makeStyles(ownStyles)();

  const deleteModerator = async () => {
    await AxiosInstance.delete(
      `/admin/delete-cancel-reason?unique_id=${props.unique_id}`
    )
      .then((response) => {
        if (response.data.error) {
          alert("Error");
        } else {
          if (response.data.body == "success") {
            handleClose();
            props.getData();
            showSuccess("Üstünlikli pozuldy!!!");
          }
        }
      })
      .catch((ex) => {
        showError(ex);
      });
  };
  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          textTransform: "none",
          borderRadius: "16px",
          background: "#F61A1A",
          color: "#fefefe",
          fontSize: "14px",
          fontWeight: "600",
        }}
        variant="contained"
      >
        Pozmak
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className={classes.text}>
            Siz <em>{props.reason} </em> atly yzyna gaýtarmagyň sebäbini
            <br /> pozmak isleýaňizmi ?!
          </Typography>
          <Stack direction="row" spacing={4} mt={3} justifyContent={"center"}>
            <Button
              onClick={handleClose}
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
              onClick={deleteModerator}
              variant="contained"
              style={{
                textTransform: "none",
                fontWeight: "600",
                borderRadius: "16px",
                color: "#fefefe",
                background: "#5E9CCE",
                width: "120px",
              }}
            >
              Hawa
            </Button>
          </Stack>
        </Box>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default DeleteCancelReason;

function ownStyles() {
  return {
    text: {
      color: "#fff",
    },
  };
}

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
