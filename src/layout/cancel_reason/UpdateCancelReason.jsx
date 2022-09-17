import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { AxiosInstance } from "../../api-interface/api/AxiosInstance.mjs";
import { showError, showSuccess } from "../../view/helper/Alert/Alert.jsx";

const UpdateCancelReason = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const [sell_point_id, setSell_point_id] = useState(props.item.sell_point_id);
  const [value, setValue] = useState(props.item.reason);

  const handleChange = (event) => {
    setSell_point_id(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
    setSell_point_id(props.item.sell_point_id);
    setValue(props.item.reason);
  };

  const updateCancelReason = async (unique_id) => {
    const data = {
      sell_point_id: sell_point_id,
      value: value,
      unique_id: props.item.unique_id,
    };
    await AxiosInstance.put("/admin/update-cancel-reason", data)
      .then((resp) => {
        handleClose();
        props.getData();
        showSuccess("Ustunlikli üýtgedildi !!!");
      })
      .catch((err) => {
        showError(err + "");
      });
  };

  const clear = () => {
    setValue("");
    setSell_point_id("");
  };
  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          textTransform: "none",
          borderRadius: "16px",
          background: "#5E9CCE",
          color: "#fefefe",
          fontSize: "14px",
          fontWeight: "600",
        }}
        variant="contained"
      >
        Üýtget
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <center>
            <Typography>Yzyna gaýtarmagyň sebäbini üýtgetmek</Typography>
          </center>
          <Stack spacing={2} mt={3}>
            <TextField
              fullWidth
              id="filled-basic"
              label="Sebäbi..."
              variant="filled"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

            {/* <FormControl variant="filled">
              <InputLabel id="demo-simple-select-filled-label">
                Söwda nokady
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={sell_point_id}
                onChange={handleChange}
              >
                {props.selPoint.map((item, i) => {
                  return <MenuItem value={item.id}>{item.name}</MenuItem>;
                })}
              </Select>
            </FormControl> */}
          </Stack>
          <Stack
            direction={"row"}
            mt={3}
            justifyContent={"flex-end"}
            spacing={3}
          >
            <Button
              onClick={() => clear()}
              variant="contained"
              style={{
                textTransform: "none",
                borderRadius: "16px",
                background: "#F61A1A",
                color: "#fefefe",
                fontWeight: "600",
                fontFamily: "nunito",
              }}
            >
              Pozmak
            </Button>
            <Button
              style={{
                textTransform: "none",
                color: "#fefefe",
                borderRadius: "16px",
                background: "#5E9CCE",
                fontWeight: "600",
                fontFamily: "nunito",
              }}
              onClick={() => updateCancelReason(props.item.unique_id)}
              variant="contained"
            >
              Ýatda saklamak
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateCancelReason;

const style = {
  position: "absolute",
  top: "40%",
  left: "59%",
  transform: "translate(-50%, -50%)",
  width: "38%",
  display: "block",
  borderRadius: "16px",
  bgcolor: "#363636",
  boxShadow: 24,
  p: 4,
};
