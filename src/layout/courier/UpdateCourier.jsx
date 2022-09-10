import React, { useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
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
import { ToastContainer } from "react-toastify";
import { AxiosInstance } from "../../api-interface/api/AxiosInstance.mjs";
import { useState } from "react";
import { showError, showSuccess } from "../../view/helper/Alert/Alert.jsx";
import ClearIcon from "@mui/icons-material/Clear";

const UpdateCourier = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const classes = makeStyles(ownStyles)();
  const [list, setList] = useState([]);
  const [fullname, setFullname] = useState(props.item.fullname);
  const [username, setUsername] = useState(props.item.username);
  const [password, setPassword] = useState(props.item.password);
  const [phone_number, setPhone_number] = useState(props.item.phone_number);
  const [status, setStatus] = useState(props.item.status);
  const [user_role, setUser_role] = useState(props.item.user_role);
  const [sell_point_id, setSell_point_id] = useState(props.item.sell_point_id);
  const [work_start_date, setWork_start_date] = useState(
    props.item.work_start_date
  );
  const [date_of_birthday, setDate_of_birthday] = useState(
    props.item.date_of_birthday
  );
  const [unique_id, setUnique_id] = useState();
  const [userRooleList, setUserRoleList] = useState(props.item.userRooleList);

  const hoveredstyle = {
    cursor: "initial",
  };

  const handleOpen = () => {
    setOpen(true);
    setFullname(props.item.fullname);
    setUsername(props.item.username);
    setPassword(props.item.password);
    setPhone_number(props.item.phone_number);
    setStatus(props.item.status);
    setUser_role(props.item.user_role);
    setSell_point_id(props.item.sell_point_id);
    setWork_start_date(props.item.work_start_date);
    setDate_of_birthday(props.item.date_of_birthday);
  };

  const updateCourier = async (unique_id) => {
    const data = {
      fullname: fullname,
      username: username,
      password: password,
      phone_number: phone_number,
      status: status,
      user_role: user_role,
      sell_point_id: sell_point_id,
      work_start_date: work_start_date,
      date_of_birthday: date_of_birthday,
      unique_id: unique_id,
    };
    await AxiosInstance.put("/admin/update-courier", data)
      .then((resp) => {
        if (!resp.data.err) {
          props.getCourier(1);
          handleClose();
          showSuccess("Üstünlikli üýtgedildi !!!");
        }
      })
      .catch((err) => {
        showError(err + "");
      });
  };

  const getSellPoint = async () => {
    await AxiosInstance.get("/admin/get-sell-point")
      .then((resp) => {
        if (!resp.data.err) {
          setList(resp.data.body);
        }
      })
      .catch((err) => {
        showError(err + "");
      });
  };

  useEffect(() => {
    getSellPoint();
  }, []);

  const clear = () => {
    setFullname("");
    setUsername("");
    setPassword("");
    setPhone_number("");
    setStatus("");
    setUser_role("");
    setSell_point_id("");
    setWork_start_date("");
    setDate_of_birthday("");
  };

  const getUserRole = async () => {
    await AxiosInstance.get("/admin/get-user-role")
      .then((resp) => {
        if (!resp.data.err) {
          setUserRoleList(resp.data.body);
        }
      })
      .catch((err) => {
        showError(err + "");
      });
  };

  useEffect(() => {
    getUserRole();
  }, []);
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
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  variant="standard"
                  inputProps={{
                    style: { fontFamily: "nunito", color: "white" },
                  }}
                />
              </Stack>
              <Stack width={"100%"}>
                <FormControl variant="standard">
                  <InputLabel id="demo-simple-select-standard-label">
                    Söwda nokatlary
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={sell_point_id}
                    onChange={(e) => setSell_point_id(e.target.value)}
                    label="Sell point"
                  >
                    <MenuItem value="0">
                      <em>Hich haysy</em>
                    </MenuItem>
                    {list?.map((item, i) => {
                      return <MenuItem value={item.id}>{item.name}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </Stack>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              mt={2}
            >
              <Stack width={"100%"}>
                <CssTextField
                  id="standard-basic"
                  label="Ady"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  variant="standard"
                  inputProps={{
                    style: { fontFamily: "nunito", color: "white" },
                  }}
                />
              </Stack>
              <Stack width={"100%"}>
                <CssTextField
                  id="standard-basic"
                  label="Paroly"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <Stack width={"100%"}>
                <CssTextField
                  id="standard-basic"
                  label="Telefon belgisi:"
                  value={phone_number}
                  onChange={(e) => setPhone_number(e.target.value)}
                  variant="standard"
                  inputProps={{
                    style: { fontFamily: "nunito", color: "white" },
                  }}
                />
              </Stack>
              <Stack width={"100%"}>
                <FormControl variant="standard">
                  <InputLabel id="demo-simple-select-standard-label">
                    Statusy
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    label="Status"
                  >
                    <MenuItem value={"1"}>Ishjen</MenuItem>
                    <MenuItem value={"2"}>Ishjen dal</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              mt={2}
            >
              <Stack width={"100%"}>
                <FormControl variant="standard">
                  <InputLabel id="demo-simple-select-standard-label">
                    Ulanyjy görnüşleri
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={user_role}
                    onChange={(e) => setUser_role(e.target.value)}
                    label="Sell point"
                  >
                    <MenuItem value="0">
                      <em>Hich haysy</em>
                    </MenuItem>
                    {userRooleList?.map((item, i) => {
                      return <MenuItem value={item.id}>{item.name}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </Stack>
              <Stack width={"100%"}>
                <input
                  className={classes.dateInput}
                  type="date"
                  style={{ color: "#fefefe", borderBottomColor: "#fff" }}
                  value={date_of_birthday}
                  onChange={(e) => setDate_of_birthday(e.target.value)}
                />{" "}
                <p style={{ color: "#b1b1b1" }}>Işe başlan senesi</p>
              </Stack>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Stack width={"50%"}>
                <input
                  className={classes.dateInput}
                  type="date"
                  style={{ color: "#fefefe", borderBottomColor: "#fff" }}
                  value={work_start_date}
                  onChange={(e) => setWork_start_date(e.target.value)}
                />{" "}
                <p style={{ color: "#b1b1b1" }}>Işe başlan senesi</p>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              spacing={3}
              mt={3}
              justifyContent={"flex-end"}
            >
              <Button
                className={classes.delete}
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
                className={classes.save}
                style={{
                  textTransform: "none",
                  color: "#fefefe",
                  borderRadius: "16px",
                  background: "#5E9CCE",
                  fontWeight: "600",
                  fontFamily: "nunito",
                }}
                onClick={() => updateCourier(props.item.unique_id)}
                variant="contained"
              >
                Ýatda saklamak
              </Button>
            </Stack>
          </Box>
        </Box>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default UpdateCourier;

function ownStyles() {
  return {
    input: {
      color: "white",
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
  },
  input: {
    color: "white",
  },
});

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#b1b1b1",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#b1b1b1",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#b1b1b1",
      },
      "&:hover fieldset": {
        borderColor: "#b1b1b1",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#b1b1b1",
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
