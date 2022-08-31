import { Grid, IconButton, Stack, TextField } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { AxiosInstance } from "../../../api-interface/api/AxiosInstance.mjs";
import { useState } from "react";
import { showError, showSuccess } from "../../../view/helper/Alert/Alert";
import { useEffect } from "react";
import { checkList } from "../../../common/utils.mjs";
import Empty from "../../../common/Empty";
import { ToastContainer } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AddCircleOutlined from "@mui/icons-material/AddCircleOutlined";
import { Box } from "@mui/system";

const SpeakTone = () => {
  const hoveredstyle = {
    cursor: "initial",
  };
  const classes = makeStyles(iconStyles)();
  const [list, setList] = useState([]);
  const [add_value, setAddValue] = useState("");

  const getData = async () => {
    await AxiosInstance.get("/admin/get-info?type=focus_word")
      .then((result) => {
        if (!result.data.err) {
          setList(result.data.body);
        }
      })
      .catch((err) => {
        showError(err + "");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const updateByPosition = (value, index) => {
    let temp = list[index];
    temp.value = value;
    let array = [
      ...list.slice(0, index),
      temp,
      ...list.slice(index + 1, list.length),
    ];
    setList(array);
  };

  const updateInfo = (value, id) => {
    AxiosInstance.put("/admin/update-info", {
      type: "focus_word",
      value: value,
      id: id,
    })
      .then((result) => {
        showSuccess("Üstünlikli üytgedildi !!!");
      })
      .catch((err) => {
        showError(err);
      });
  };

  const addInfo = () => {
    AxiosInstance.post("/admin/add-info", {
      type: "focus_word",
      value: add_value,
    })
      .then((result) => {
        showSuccess("Üstünlikli goşuldy !!!");
        handleClose();
        setAddValue("");
        getData();
      })
      .catch((err) => {
        showError(err);
      });
  };

  const deleteByPosition = (id) => {
    if (window.confirm("Siz çyndanam pozmakçymy?")) {
      AxiosInstance.delete(`/admin/delete-info?id=${id}&type=focus_word`)
        .then((result) => {
          showSuccess("Üstünlikli pozuldy !!!");
          getData();
        })
        .catch((err) => {
          showError(err);
        });
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="moderator container">
      <ToastContainer />
      <Stack direction={"row"} justifyContent={"space-between"}>
        <label style={{ color: "#fff", fontSize: "22px", fontWeight: "600" }}>
          Nähili ýüzlenilse gowy görýär
        </label>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          startIcon={<AddCircleOutlined />}
          variant={"outlined"}
          style={{
            textTransform: "none",
            fontWeight: "600",
            borderRadius: "16px",
          }}
        >
          Goşmak
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div style={{ padding: "12px" }}>
            <TextField
              fullWidth
              id="filled-basic"
              label="Ady..."
              variant="filled"
              value={add_value}
              onChange={(e) => setAddValue(e.target.value)}
            />
            <br />
            <Button
              fullWidth
              variant={"contained"}
              onClick={() => addInfo()}
              sx={{ mt: 1 }}
            >
              Goş
            </Button>
          </div>
        </Menu>
      </Stack>
      <div className="statusContainer">
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            mt={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {checkList(list) ? (
              list.map((e, i) => {
                return (
                  <Grid item xs={6}>
                    <Stack direction={"row"} mt={2}>
                      <input
                        style={{
                          width: "80%",
                          padding: "8px 16px",
                          border: "none",
                          outline: "none",
                          fontSize: "16px",
                          background: "#484848",
                          color: "#fefefe",
                          borderRadius: "32px",
                          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15",
                        }}
                        type="text"
                        value={e.value}
                        placeholder={"Ady..."}
                        onChange={(e) => updateByPosition(e.target.value, i)}
                      />

                      <IconButton
                        tooltip="Description here"
                        hoveredstyle={hoveredstyle}
                        onClick={() => updateInfo(e.value, e.id)}
                      >
                        <EditIcon className={classes.successIcon} />
                      </IconButton>
                      <IconButton
                        style={{ color: "#F61A1A" }}
                        onClick={() => deleteByPosition(e.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </Grid>
                );
              })
            ) : (
              <Empty />
            )}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default SpeakTone;

function iconStyles() {
  return {
    successIcon: {
      color: "#5E9CCE",
    },
    errorIcon: {
      color: "red",
    },
    successThirdIcon: {
      color: "#06C619",
    },
  };
}
