import {
  Button,
  Checkbox,
  IconButton,
  Modal,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import { AxiosInstance } from "../../api-interface/api/AxiosInstance.mjs";
import { ToastContainer } from "react-toastify";
import { showError, showSuccess } from "../../view/helper/Alert/Alert";

const UpdateUserRole = (props) => {
  let empty_permissions = [
    {
      permission: "ringing-call",
      can_read: false,
      can_write: false,
      can_edit: false,
      can_delete: false,
    },
    {
      permission: "accepted-call",
      can_read: false,
      can_write: false,
      can_edit: false,
      can_delete: false,
    },
    {
      permission: "rejected-call",
      can_read: false,
      can_write: false,
      can_edit: false,
      can_delete: false,
    },
    {
      permission: "customer",
      can_read: false,
      can_write: false,
      can_edit: false,
      can_delete: false,
    },
    {
      permission: "courier",
      can_read: false,
      can_write: false,
      can_edit: false,
      can_delete: false,
    },
    {
      permission: "staff",
      can_read: false,
      can_write: false,
      can_edit: false,
      can_delete: false,
    },
    {
      permission: "sell-points",
      can_read: false,
      can_write: false,
      can_edit: false,
      can_delete: false,
    },
    {
      permission: "fields",
      can_read: false,
      can_write: false,
      can_edit: false,
      can_delete: false,
    },
    {
      permission: "operator",
      can_read: false,
      can_write: false,
      can_edit: false,
      can_delete: false,
    },
    {
      permission: "orders",
      can_read: false,
      can_write: false,
      can_edit: false,
      can_delete: false,
    },
    {
      permission: "inbox",
      can_read: false,
      can_write: false,
      can_edit: false,
      can_delete: false,
    },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const classes = makeStyles(buttonStyles)();
  const [value, setValue] = React.useState(props.item.name);
  const [permissions, setPermissions] = React.useState(
    typeof props.item.permissions !== "undefined" &&
      props.item.permissions != null &&
      props.item.permissions.length > 0 &&
      props.item.permissions != ""
      ? props.item.permissions
      : empty_permissions
  );

  const handleOpen = () => {
    setOpen(true);
    setPermissions(
      typeof props.item.permissions !== "undefined" &&
        props.item.permissions != null &&
        props.item.permissions.length > 0 &&
        props.item.permissions != ""
        ? props.item.permissions
        : empty_permissions
    );
    setValue(props.item.name);
  };

  const changeReadPermission = (value, index) => {
    let temp = permissions[index];
    temp.can_read = value;
    let array = [
      ...permissions.slice(0, index),
      temp,
      ...permissions.slice(index + 1, permissions.length),
    ];
    setPermissions(array);
  };

  const changeWritePermission = (value, index) => {
    let temp = permissions[index];
    temp.can_write = value;
    let array = [
      ...permissions.slice(0, index),
      temp,
      ...permissions.slice(index + 1, permissions.length),
    ];
    setPermissions(array);
  };

  const changeEditPermission = (value, index) => {
    let temp = permissions[index];
    temp.can_edit = value;
    let array = [
      ...permissions.slice(0, index),
      temp,
      ...permissions.slice(index + 1, permissions.length),
    ];
    setPermissions(array);
  };

  const changeDeletePermission = (value, index) => {
    let temp = permissions[index];
    temp.can_delete = value;
    let array = [
      ...permissions.slice(0, index),
      temp,
      ...permissions.slice(index + 1, permissions.length),
    ];
    setPermissions(array);
  };

  const updateUserRole = (id) => {
    AxiosInstance.put("/admin/update-user-role", {
      user_role: value,
      id: props.item.id,
      permissions: permissions,
    })
      .then((result) => {
        showSuccess("Üstünlikli Üýtgedildi !!!");
        setValue("");
        setPermissions(empty_permissions);
        props.getData();
        handleClose();
      })
      .catch((err) => {
        showError(err);
      });
  };
  return (
    <div>
      <ToastContainer />
      <Button
        onClick={handleOpen}
        variant={"contained"}
        style={{
          textTransform: "none",
          borderRadius: "16px",
          fontWeight: "600",
          color: "#fefefe",
          background: "#5E9CCE",
        }}
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
          <Stack textAlign={"center"}>
            <Typography
              style={{
                fontSize: "22px",
                fontFamily: "nunito",
                fontWeight: "600",
              }}
              className={classes.typography}
            >
              Ulanyjy görnüşi üýtgetmek
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            p={2}
            pr={10}
            mt={4}
            justifyContent={"space-between"}
          >
            <Stack width={"100%"}>
              <TextField
                id="standard-basic"
                label="Ulanyjy görnüşi"
                variant="standard"
                fullWidth
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Stack>
          </Stack>

          <TableContainer
            sx={{
              marginTop: "20px",
              background: "#363636",
              paddingBottom: "40px",
            }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      color: "#b1b1b1",
                      fontFamily: "nuntio",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Rugsat
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#b1b1b1",
                      fontFamily: "nuntio",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Okamak
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#b1b1b1",
                      fontFamily: "nuntio",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Ýazmak
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#b1b1b1",
                      fontFamily: "nuntio",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Üýtgetmek
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#b1b1b1",
                      fontFamily: "nuntio",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Pozmak
                  </TableCell>
                  <TableCell style={{ color: "#b1b1b1" }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {permissions.map((e, i) => {
                  return (
                    <TableRow className={classes.itemContainer}>
                      <TableCell className={classes.items}>
                        <Typography
                          style={{
                            color: "#fefefe",
                            fontFamily: "nuntio",
                            fontSize: "16px",
                            fontWeight: "600",
                          }}
                        >
                          {props.translatePermission(e.permission)}
                        </Typography>
                      </TableCell>
                      <TableCell className={classes.title}>
                        {" "}
                        <Stack>
                          <Checkbox
                            style={{ width: "50px" }}
                            checked={e.can_read}
                            onChange={(e) =>
                              changeReadPermission(e.target.checked, i)
                            }
                            icon={<ClearIcon className={classes.clearIcon} />}
                            checkedIcon={
                              <CheckIcon className={classes.checkIcon} />
                            }
                          />
                        </Stack>
                      </TableCell>

                      <TableCell className={classes.title}>
                        {" "}
                        <Stack>
                          <Checkbox
                            style={{ width: "50px" }}
                            checked={e.can_write}
                            onChange={(e) =>
                              changeWritePermission(e.target.checked, i)
                            }
                            icon={<ClearIcon className={classes.clearIcon} />}
                            checkedIcon={
                              <CheckIcon className={classes.checkIcon} />
                            }
                          />
                        </Stack>
                      </TableCell>
                      <TableCell className={classes.title}>
                        <Stack>
                          <Checkbox
                            style={{ width: "50px" }}
                            checked={e.can_edit}
                            onChange={(e) =>
                              changeEditPermission(e.target.checked, i)
                            }
                            icon={<ClearIcon className={classes.clearIcon} />}
                            checkedIcon={
                              <CheckIcon className={classes.checkIcon} />
                            }
                          />
                        </Stack>
                      </TableCell>
                      <TableCell className={classes.title}>
                        {" "}
                        <Stack>
                          <Checkbox
                            style={{ width: "50px" }}
                            checked={e.can_delete}
                            onChange={(e) =>
                              changeDeletePermission(e.target.checked, i)
                            }
                            icon={<ClearIcon className={classes.clearIcon} />}
                            checkedIcon={
                              <CheckIcon className={classes.checkIcon} />
                            }
                          />
                        </Stack>
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack
            mt={3}
            direction={"row"}
            justifyContent={"flex-end"}
            spacing={3}
          >
            <Button
              variant="contained"
              onClick={handleClose}
              style={{
                background: "#F61A1A",
                borderRadius: "16px",
                textTransform: "none",
                fontWeight: "600",
                fontFamily: "nunito",
                color: "#fefefe",
              }}
            >
              Ýatyrmak
            </Button>
            <Button
              variant="contained"
              onClick={() => updateUserRole()}
              sx={{
                background: "#5E9CCE",
                borderRadius: "16px",
                textTransform: "none",
                fontWeight: "600",
                fontFamily: "nunito",
                color: "#fefefe",
              }}
            >
              Ýatda saklamak
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateUserRole;

const style = {
  position: "absolute",
  height: "100%",
  overflow: "scroll",
  width: "100%",
  bgcolor: "#363636",
  border: "transparent",
  boxShadow: "0px 0px 10px rgba(129, 129, 129, 0.15)",
  color: "#fff",
  p: 4,
};

function buttonStyles() {
  return {
    typography: {
      fontWeight: "600",
      fontSize: "22px",
    },
    title: {
      color: "#B1B1B1",
    },
    checkIcon: {
      color: "#5FFD6E",
    },
    clearIcon: {
      color: "#FF4646",
    },
  };
}
