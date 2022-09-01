import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { AxiosInstance } from "../../api-interface/api/AxiosInstance.mjs";
import { showError, showSuccess } from "../../view/helper/Alert/Alert";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import ClearIcon from "@mui/icons-material/Clear";
import MapLocation from "../moderator/MapLocation.jsx";

const UpdateSellPoint = (props) => {
  const classes = makeStyles(ownStyles)();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const [name, setName] = useState(props.item.name);
  const [address, setAddress] = useState(props.item.address);
  const [phone_number, setPhone_number] = useState(props.item.phone_number);
  const [latitude, setLatitude] = useState(props.item.latitude);
  const [longitude, setLongitude] = useState(props.item.longitude);
  const [unique_id, setUnique_id] = useState();
  const [list, setList] = useState([]);
  const handleOpen = () => {
    setOpen(true);
    setAddress(props.item.address);
    setPhone_number(props.item.phone_number);
    setLatitude(props.item.latitude);
    setLongitude(props.item.longitude);
  };

  const updateSellPoint = async (unique_id) => {
    const data = {
      name: name,
      address: address,
      phone_number: phone_number,
      latitude: latitude,
      longitude: longitude,
      unique_id: unique_id,
    };
    await AxiosInstance.put("/admin/update-sell-point", data)
      .then((resp) => {
        handleClose();
        props.getStore(1);
        showSuccess("Ustunlikli üýtgedildi !!!");
      })
      .catch((err) => {
        showError(err + "");
      });
  };

  const clear = () => {
    setName("");
    setAddress("");
    setPhone_number("");
    setLatitude("");
    setLongitude("");
  };

  const hoveredstyle = {
    cursor: "initial",
  };

  return (
    <div>
      <ToastContainer />
      <Button
        onClick={handleOpen}
        style={{
          textTransform: "none",
          letterSpacing: "1px",
          borderRadius: "16px",
          background: "#5E9CCE",
          fontWeight: "600",
          color: "#fefefe",
          height: "33px",
        }}
        variant={"contained"}
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
          <Box component="form" sx={{ color: "#fff" }}>
            <Stack direction={"row"} justifyContent={"flex-end"}>
              <IconButton
                tooltip="Description here"
                hoveredstyle={hoveredstyle}
                onClick={handleClose}
              >
                <ClearIcon />
              </IconButton>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Stack width={"100%"}>
                <CssTextField
                  id="standard-basic"
                  label="Doly ady"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="standard"
                  inputProps={{
                    style: { fontFamily: "nunito", color: "white" },
                  }}
                />
              </Stack>
              <Stack width={"100%"}>
                <CssTextField
                  id="standard-basic"
                  label="Telefon belgisi :"
                  value={phone_number}
                  onChange={(e) => setPhone_number(e.target.value)}
                  variant="standard"
                  inputProps={{
                    style: { fontFamily: "nunito", color: "white" },
                  }}
                />
              </Stack>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              mt={2}
            >
              <Stack width={"50%"}>
                <CssTextField
                  id="standard-basic"
                  label="Paroly"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  variant="standard"
                  inputProps={{
                    style: { fontFamily: "nunito", color: "white" },
                  }}
                />
              </Stack>
            </Stack>

            <Stack direction="row" mt={4}>
              <MapLocation
                setLatitude={setLatitude}
                setLongitude={setLongitude}
                latitude={latitude}
                longitude={longitude}
              />
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"flex-end"}
              spacing={3}
              mt={3}
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
                onClick={() => updateSellPoint(props.item.unique_id)}
                variant="contained"
              >
                Ýatda saklamak
              </Button>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDjWN9Uw0XBi0DVkb34diiqIeziXHEmLZA",
})(UpdateSellPoint);

function ownStyles() {
  return {
    input: {
      color: "white",
      fontFamily: "nunito",
    },
    delete: {
      background: "#F61A1A",
      borderRadius: "16px",
      textTransform: "none",
      fontWeight: "600",
      fontFamily: "nunito",
    },
    save: {
      background: "#5E9CCE",
      borderRadius: "16px",
      textTransform: "none",
      fontWeight: "600",
      fontFamily: "nunito",
    },
    dateInput: {
      border: "none",
      background: "transparent",
      borderBottom: "1px solid #363636",
      padding: "14px 16px",
      outline: "none",
      fontFamily: "nunito",
      fontSize: "16px",
    },
  };
}
const styles = (theme) => ({
  textField: {
    border: "1px solid #fff",
    fontWeight: 500,
    fontFamily: "nunito",
  },
  input: {
    color: "white",
    fontFamily: "nunito",
  },
});

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#b1b1b1",
      fontFamily: "nunito",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#b1b1b1",
      fontFamily: "nunito",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#b1b1b1",
        fontFamily: "nunito",
      },
      "&:hover fieldset": {
        borderColor: "#b1b1b1",
        fontFamily: "nunito",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#b1b1b1",
        fontFamily: "nunito",
      },
    },
  },
})(TextField);

const style = {
  position: "absolute",
  top: "45%",
  left: "55%",
  overflow: true,
  transform: "translate(-50%, -50%)",
  width: "60%",
  display: "block",
  borderRadius: "16px",
  bgcolor: "#636161",
  boxShadow: 24,
  color: "#fff",
  p: 4,
};
