import { Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import "../../style/customer/customer.css";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import AddCustomer from "./AddCustomer";
import { AxiosInstance } from "../../api-interface/api/AxiosInstance.mjs";
import { showError } from "../../view/helper/Alert/Alert";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Checkbox from "@mui/material/Checkbox";
import { NavLink } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import Loading from "../../common/Loading";
import Empty from "../../common/Empty";
import UpdateUserRole from "./UpdateUserRole";
import DeleteUserRoler from "./DeleteUserRoler";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CustomerType = () => {
  const hoveredstyle = {
    cursor: "initial",
  };
  const classes = makeStyles(buttonStyles)();
  const [isEmptyPage, setEmptyPage] = useState(false);
  const [list, setList] = useState([]);

  const getUserRole = async () => {
    await AxiosInstance.get("/admin/get-user-role")
      .then((resp) => {
        if (!resp.data.err) {
          setList(resp.data.body);
          if (
            typeof resp.data.body === "undefined" ||
            resp.data.body.length <= 0
          ) {
            setEmptyPage(true);
          } else {
            setEmptyPage(false);
          }
        } else {
          if (list.length === 0) {
            setEmptyPage(true);
          }
        }
      })
      .catch((err) => {
        showError(err + "");
        if (list.length === 0) {
          setEmptyPage(true);
        }
      });
  };

  useEffect(() => {
    getUserRole();
  }, []);

  const checkList = (list) => {
    try {
      let r = list[0];
      return true;
    } catch (err) {
      return false;
    }
  };

  const translatePermission = (permission) => {
    if (permission === "ringing-call") {
      return "Gelýän jaňlar";
    }
    if (permission === "accepted-call") {
      return "Kabul edilen jaňlar";
    }
    if (permission === "rejected-call") {
      return "Göýberilen jaňlar";
    }
    if (permission === "customer") {
      return "Müşderiler";
    }
    if (permission === "courier") {
      return "Eltip berijiler";
    }
    if (permission === "staff") {
      return "Işgärler";
    }
    if (permission === "fields") {
      return "Soraglar";
    }
    if (permission === "operator") {
      return "Operator";
    }
    if (permission === "orders") {
      return "Sargytlar";
    }
    if (permission === "inbox") {
      return "Gelýän hatlar";
    }

    if (permission === "sell-points") {
      return "Söwda nokatlary";
    }
  };

  return (
    <div className="customer container">
      <Stack direction={"row"} justifyContent={"space-between"} mb={7}>
        <Typography
          style={{
            fontSize: "24px",
            fontWeight: "600",
            fontFamily: "nunito",
            color: "#FEFEFE",
          }}
        >
          Ulanyjy görnüşler
        </Typography>
        <AddCustomer
          getData={getUserRole}
          translatePermission={translatePermission}
        />
      </Stack>
      {(typeof list === "undefined" || list.length <= 0) && !isEmptyPage ? (
        <Loading />
      ) : (typeof list === "undefined" || list.length <= 0) && isEmptyPage ? (
        <Empty />
      ) : (
        <>
          {list.map((item, i) => {
            return (
              <div style={{ marginTop: "52px" }}>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  mt={3}
                >
                  <Typography
                    style={{
                      color: "#fefefe",
                      fontFamily: "nuntio",
                      fontSize: "19px",
                      fontWeight: "600",
                      textTransform: "capitalize",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    justifyContent={"flex-end"}
                  >
                    <DeleteUserRoler getData={getUserRole} item={item} />
                    <UpdateUserRole
                      getData={getUserRole}
                      item={item}
                      translatePermission={translatePermission}
                    />
                  </Stack>
                </Stack>

                <TableContainer
                  sx={{
                    marginTop: "20px",
                    background: "#363636",
                    paddingBottom: "40px",
                  }}
                  component={Paper}
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
                      {checkList(item.permissions)
                        ? item.permissions.map((e, i) => {
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
                                    {translatePermission(e.permission)}
                                  </Typography>
                                </TableCell>
                                <TableCell className={classes.title}>
                                  {" "}
                                  <Stack>
                                    <Checkbox
                                      style={{ width: "50px" }}
                                      {...label}
                                      disabled
                                      checked={e.can_read}
                                      icon={
                                        <ClearIcon
                                          className={classes.clearIcon}
                                        />
                                      }
                                      checkedIcon={
                                        <CheckIcon
                                          className={classes.checkIcon}
                                        />
                                      }
                                    />
                                  </Stack>
                                </TableCell>

                                <TableCell className={classes.title}>
                                  {" "}
                                  <Stack>
                                    <Checkbox
                                      style={{ width: "50px" }}
                                      {...label}
                                      checked={e.can_write}
                                      disabled
                                      icon={
                                        <ClearIcon
                                          className={classes.clearIcon}
                                        />
                                      }
                                      checkedIcon={
                                        <CheckIcon
                                          className={classes.checkIcon}
                                        />
                                      }
                                    />
                                  </Stack>
                                </TableCell>
                                <TableCell className={classes.title}>
                                  <Stack>
                                    <Checkbox
                                      style={{ width: "50px" }}
                                      {...label}
                                      checked={e.can_edit}
                                      disabled
                                      icon={
                                        <ClearIcon
                                          className={classes.clearIcon}
                                        />
                                      }
                                      checkedIcon={
                                        <CheckIcon
                                          className={classes.checkIcon}
                                        />
                                      }
                                    />
                                  </Stack>
                                </TableCell>
                                <TableCell className={classes.title}>
                                  {" "}
                                  <Stack>
                                    <Checkbox
                                      style={{ width: "50px" }}
                                      {...label}
                                      checked={e.can_delete}
                                      disabled
                                      icon={
                                        <ClearIcon
                                          className={classes.clearIcon}
                                        />
                                      }
                                      checkedIcon={
                                        <CheckIcon
                                          className={classes.checkIcon}
                                        />
                                      }
                                    />
                                  </Stack>
                                </TableCell>
                                <TableCell></TableCell>
                              </TableRow>
                            );
                          })
                        : null}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default CustomerType;

function buttonStyles() {
  return {
    contained: {
      background: "#5E9CCE",
      borderRadius: "16px",
      textTransform: "none",
      width: "150px",
      fontWeight: "600",
      letterSpacing: "1px",
    },
    typography: {
      color: "#fefefe",
      fontSize: "22px",
      fontWeight: "600",
    },
    typographyTitle: {
      color: "#B1B1B1",
    },
    typographyTable: {
      color: "#FEFEFE",
    },
    checkIcon: {
      color: "#5FFD6E",
    },
    clearIcon: {
      color: "#FF4646",
    },
    typeCustomer: {
      background: "#363636",
      boxShadow: "0px 0px 10px rgba(129, 129, 129, 0.15)",
      borderRadius: "16px",
    },
    delete: {
      borderRadius: "16px",
      textTransform: "none",
      color: "#fff",
      background: "#F61A1A",
      fontWeight: "600",
    },
    save: {
      borderRadius: "16px",
      textTransform: "none",
      color: "#fff",
      background: "#5E9CCE",
      fontWeight: "600",
    },
    rightIcon: {
      color: "#B1B1B1",
      fontSize: "25px",
      borderRadius: "50px",
      background: "#585858",
    },
  };
}
