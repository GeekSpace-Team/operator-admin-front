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
import ClearIcon from "@mui/icons-material/Clear";

const AddCourier = (props) => {
  const classes = makeStyles(ownStyles)();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  const [phone_number, setPhone_number] = useState();
  const [status, setStatus] = useState("1");
  const [user_role, setUser_role] = useState(2);
  const [sell_point_id, setSell_point_id] = useState();
  const [work_start_date, setWork_start_date] = useState();
  const [date_of_birthday, setDate_of_birthday] = useState();
  const [userRooleList, setUserRoleList] = useState([]);
  const [list, setList] = useState([]);

  const addCourier = async () => {
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
    };
    await AxiosInstance.post("/admin/add-courier", data)
      .then((resp) => {
        handleClose();
        props.getCourier();
        showSuccess("Ustunlikli goshudy");
        setFullname("");
        setUsername("");
        setPassword("");
        setPhone_number("");
        setStatus("");
        setUser_role("");
        setSell_point_id("");
        setWork_start_date("");
        setDate_of_birthday("");
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
        Goşmak
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
                    {list.map((item, i) => {
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
                    {userRooleList.map((item, i) => {
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
              <Stack width={"100%"}>
                <input
                  className={classes.dateInput}
                  type="date"
                  style={{ color: "#fefefe", borderBottomColor: "#fff" }}
                  value={date_of_birthday}
                  onChange={(e) => setDate_of_birthday(e.target.value)}
                />{" "}
                <p style={{ color: "#b1b1b1" }}>Doglan senesi</p>
              </Stack>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              mt={2}
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
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={2} sm={12} md={12}>
                <Stack
                  direction={"row"}
                  spacing={3}
                  justifyContent={"flex-end"}
                  mt={3}
                >
                  <Button
                    className={classes.delete}
                    onClick={() => clear()}
                    variant="contained"
                    style={{
                      textTransform: "none",
                      borderRadius: "16px",
                      color: "#fefefe",
                      background: "#F61A1A",
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
                      borderRadius: "16px",
                      background: "#5E9CCE",
                      color: "#fefefe",
                      fontWeight: "600",
                      fontFamily: "nunito",
                    }}
                    onClick={() => addCourier()}
                    variant="contained"
                  >
                    Ýatda saklamak
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddCourier;

function ownStyles() {
  return {
    input: {
      color: "white",
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
  top: "35%",
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
