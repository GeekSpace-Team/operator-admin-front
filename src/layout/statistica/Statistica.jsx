import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core/styles";
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { AxiosInstance } from "../../api-interface/api/AxiosInstance.mjs";
import { showError } from "../../view/helper/Alert/Alert";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";
import Loading from "../../common/Loading";
import Empty from "../../common/Empty";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// style...
import "../../style/statistica/statistica.css";
// style...

const Statistica = () => {
  const classes = makeStyles(ownStyles)();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const hoveredstyle = {
    cursor: "initial",
  };

  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [isEmptyPage, setEmptyPage] = useState(false);
  const [list, setList] = useState([]);

  const getStatistics = async () => {
    const data = {
      start_date: start_date,
      end_date: end_date,
    };
    await AxiosInstance.post("/admin/get-statistics", data)
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
    getStatistics();
  }, [start_date]);

  useEffect(() => {
    getStatistics();
  }, [end_date]);

  useEffect(() => {
    getStatistics();
  }, []);

  const handleStartDate = (date) => {
    let d = new Date(date);
    setStart_date(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`);
  };

  const handleEndDate = (date) => {
    let d = new Date(date);
    setEnd_date(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`);
  };

  const getTotalPrice = (products) => {
    try {
      let total = 0;
      products.forEach((element) => {
        let sum = element.product_debt_price + element.product_cash_price;
        let t = 0;
        if (
          element.product_discount != null &&
          element.product_discount != ""
        ) {
          t = (element.product_discount / 100) * sum;
        }
        let k = sum - t;
        total += k;
      });
      return total;
    } catch (err) {
      console.log(err);
      return 0;
    }
  };

  const getLenght = (list) => {
    try {
      return list.length;
    } catch (err) {
      return 0;
    }
  };

  return (
    <div className="statistica container">
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          style={{
            fontSize: "24px",
            fontWeight: "600",
            fontFamily: "nunito",
            color: "#FEFEFE",
          }}
        >
          Statistika
        </Typography>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant={"outlined"}
          style={{
            border: "1px solid",
            borderRadius: "22px",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
          sx={{ color: "#585858", borderColor: "#585858" }}
          endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        >
          Filter
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          style={{ borderRadius: "12px" }}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div style={{ padding: "20px" }}>
            <Typography>Wagt boýunça</Typography>
            <Stack direction={"row"} sx={{ mt: 2 }}>
              <Typography
                sx={{
                  backgroundColor: "#888888",
                  border: "1px solid #7E7E7E",
                  color: "#282828",
                  padding: "8px",
                  width: "150px",
                  fontFamily: "nunito",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Başlangyç sene
              </Typography>
              <Typography
                sx={{
                  padding: "8px",
                  border: "1px solid #B1B1B1",
                  background: "#363636",
                }}
              >
                <input
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#fefefe",
                    outline: "none",
                  }}
                  type={"date"}
                  className={"datePicker"}
                  onChange={(e) => handleStartDate(e.target.value)}
                />
              </Typography>
            </Stack>

            <Stack direction={"row"} sx={{ mt: 2 }}>
              <Typography
                sx={{
                  padding: "8px",
                  width: "150px",
                  fontFamily: "nunito",
                  fontSize: "16px",
                  backgroundColor: "#888888",
                  fontWeight: "600",
                  border: "1px solid #7E7E7E",
                  color: "#282828",
                }}
              >
                Ahyrky sene
              </Typography>
              <Typography
                sx={{
                  padding: "8px",
                  border: "1px solid #B1B1B1",
                  background: "#363636",
                }}
              >
                <input
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#fefefe",
                    outline: "none",
                  }}
                  type={"date"}
                  className={"datePicker"}
                  onChange={(e) => handleEndDate(e.target.value)}
                />
              </Typography>
            </Stack>
          </div>
        </Menu>
      </Stack>
      {(typeof list === "undefined" || list.length <= 0) && !isEmptyPage ? (
        <Loading />
      ) : (typeof list === "undefined" || list.length <= 0) && isEmptyPage ? (
        <Empty />
      ) : (
        <>
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
                    No
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#b1b1b1",
                      fontFamily: "nuntio",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                    align="left"
                  >
                    Sowda nokady
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#b1b1b1",
                      fontFamily: "nuntio",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                    align="left"
                  >
                    {" "}
                    Satylan harytlar
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#b1b1b1",
                      fontFamily: "nuntio",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                    align="left"
                  >
                    Otmen bolan harytlar
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#b1b1b1",
                      fontFamily: "nuntio",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                    align="left"
                  >
                    Summa
                  </TableCell>
                  <TableCell
                    style={{ color: "#b1b1b1" }}
                    align="left"
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.map((item, i) => {
                  return (
                    <TableRow
                      className={classes.itemContainer}
                      key={`get_statistics_key${i}`}
                    >
                      <TableCell
                        style={{
                          color: "#fefefe",
                          fontFamily: "nuntio",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        {item.id}
                      </TableCell>
                      <TableCell
                        style={{
                          color: "#fefefe",
                          fontFamily: "nuntio",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                        align="left"
                      >
                        {item.name}
                      </TableCell>
                      <TableCell
                        style={{
                          color: "#5FFD6E",
                          fontFamily: "nuntio",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                        align="left"
                      >
                        {getLenght(item.delivered_products)} sany haryt
                      </TableCell>
                      <TableCell
                        style={{
                          color: "#FF4646",
                          fontFamily: "nuntio",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                        align="left"
                      >
                        {getLenght(item.rejected_products)} sany haryt
                      </TableCell>

                      <TableCell
                        style={{
                          color: "#5AFFFF",
                          fontFamily: "nuntio",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                        align="left"
                      >
                        {getTotalPrice(item.delivered_products)} TMT
                      </TableCell>
                      <TableCell className={classes.summaColor} align="left">
                        <NavLink
                          to={`/statisticaOperator?sell_point_id=${item.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <IconButton
                            tooltip="Description here"
                            hoveredstyle={hoveredstyle}
                          >
                            <ChevronRightIcon className={classes.rightIcon} />
                          </IconButton>
                        </NavLink>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <ToastContainer /> */}
          <Stack direction={"row"} justifyContent={"flex-end"} mt={3}></Stack>
        </>
      )}
    </div>
  );
};

export default Statistica;
function ownStyles() {
  return {
    titlee: {
      fontSize: "22px",
      fontWeight: "600",
      color: "#fefefe",
    },

    button: {
      borderRadius: "16px",
      border: "1px solid #b1b1b1",
      textTransform: "none",
      color: "#b1b1b1",
      width: "150px",
    },
    menu: {
      background: "#363636",
      border: "1px solid #585858",
      boxShadow: "0px 0px 10px rgba(35, 35, 35, 0.15)",
      borderRadius: "16px",
    },
    title: {
      color: "#b1b1b1",
    },
    items: {
      color: "#fefefe",
    },
    active: {
      color: "#06C619",
    },
    passive: {
      color: "#FF4646",
    },
    summaColor: {
      color: "#5AFFFF",
    },
    itemContainer: {
      background: "#484848",
      boxShadow: "0px 0px 10px rgba(76, 76, 76, 0.15)",
      borderRadius: "16px",
      marginBottom: "20px",
    },
    startDate: {
      border: "1px solid red",
      height: "25px",
      background: "#484848",
      color: "#fff",
    },
    rightIcon: {
      color: "#B1B1B1",
      fontSize: "25px",
      borderRadius: "50px",
      background: "#585858",
    },
  };
}
