import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, IconButton, Menu, Stack } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { NavLink } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import { AxiosInstance } from "../../../api-interface/api/AxiosInstance.mjs";
import { useEffect } from "react";
import { showError } from "../../../view/helper/Alert/Alert.jsx";
import { useSearchParams } from "react-router-dom";
import Loading from "../../../common/Loading.jsx";
import Empty from "../../../common/Empty.jsx";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StatisticaOperator = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let id = searchParams.get("sell_point_id");

  const [value, setValue] = React.useState("1");
  const [sell_point_id, setSell_point_id] = useState(
    typeof id !== "undefined" && id != null ? id : 0
  );
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [list, setList] = useState([]);

  const [start_date_courier, setStart_date_courier] = useState("");
  const [end_date_courier, setEnd_date_courier] = useState("");
  const [list_courier, setList_courier] = useState([]);
  const [sell_point_id_courier, setSell_point_id_courier] = useState(
    typeof id !== "undefined" && id != null ? id : 0
  );
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = makeStyles(ownStyles)();
  const hoveredstyle = {
    cursor: "initial",
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [isEmptyPage, setEmptyPage] = useState(false);

  const getOperatorStatistics = async () => {
    const data = {
      start_date: start_date,
      end_date: end_date,
      sell_point_id: sell_point_id,
    };
    await AxiosInstance.post("/admin/get-operator-statistics", data)
      .then((resp) => {
        if (!resp.data.err) {
          setList_courier(resp.data.body);
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

  const getCourierStatistics = async () => {
    const data = {
      start_date: start_date_courier,
      end_date: end_date_courier,
      sell_point_id: sell_point_id_courier,
    };
    await AxiosInstance.post("/admin/get-courier-statistics", data)
      .then((resp) => {
        if (!resp.data.err) {
          setList(resp.data.body);
        }
      })
      .catch((err) => {
        showError(err + "");
      });
  };

  const getTotalPrice = (products) => {
    try {
      let total = 0;
      products.forEach((element) => {
        let count = 1;
        if (
          typeof element.product_count !== "undefined" &&
          element.product_count != null &&
          element.product_count != "" &&
          element.product_count > 0
        ) {
          count = element.product_count;
        }
        let sum =
          (element.product_debt_price + element.product_cash_price) * count;
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

  useEffect(() => {
    getOperatorStatistics();
  }, []);
  useEffect(() => {
    getCourierStatistics();
  }, []);

  const handleStartDate = (date) => {
    let d = new Date(date);
    setStart_date(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`);
  };

  const handleEndDate = (date) => {
    let d = new Date(date);
    setEnd_date(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`);
  };
  return (
    <div className="statistica container">
      <Stack
        mb={2}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Stack direction={"row"} alignItems={"center"}>
            <IconButton tooltip="Description here" hoveredstyle={hoveredstyle}>
              <ChevronLeftIcon className={classes.leftIcon} />
            </IconButton>
            <Typography
              style={{
                fontSize: "24px",
                fontWeight: "600",
                fontFamily: "nunito",
                color: "#FEFEFE",
              }}
            >
              Sowda nokady
            </Typography>
          </Stack>
        </NavLink>
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
          <Box
            sx={{
              width: "100%",
              typography: "body1",
              background: "#363636",
              borderRadius: "16px",
            }}
          >
            <TabContext value={value}>
              <Box sx={{ borderColor: "divider" }}>
                <StyledTabs
                  style={{ width: "100%", background: "#272727" }}
                  className="styleTabss"
                  value={value}
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <StyledTab label={"Operatorlar"} value="1" />
                  <StyledTab2 label={"Eltip berijiler"} value="2" />
                </StyledTabs>
              </Box>
              <TabPanel value="2">
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
                          Ady
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
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {list.map((item, i) => {
                        return (
                          <TableRow
                            className={classes.itemContainer}
                            key={`get_operator_statistics_key${i}`}
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
                              {item.fullname}
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
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </TabPanel>
              <TabPanel value="1">
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
                          Ady
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
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {list_courier.map((item_courier, index) => {
                        return (
                          <TableRow
                            className={classes.itemContainer}
                            key={`get_courier_statistics_key${index}`}
                          >
                            <TableCell
                              style={{
                                color: "#fefefe",
                                fontFamily: "nuntio",
                                fontSize: "16px",
                                fontWeight: "600",
                              }}
                            >
                              {item_courier.id}
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
                              {item_courier.fullname}
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
                              {getLenght(item_courier.delivered_products)} sany
                              haryt
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
                              {getLenght(item_courier.rejected_products)} sany
                              haryt
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
                              {getTotalPrice(item_courier.delivered_products)}{" "}
                              TMT
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </TabPanel>
            </TabContext>
          </Box>
        </>
      )}
    </div>
  );
};

export default StatisticaOperator;

function ownStyles() {
  return {
    titlee: {
      color: "#fefefe",
      fontSize: "22px",
      fontWeight: "600",
    },
    leftIcon: {
      color: "#fefefe",
      fontSize: "30px",
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
    tabOne: {
      borderTopLeftRadius: "16px",
      borderRadius: "16px",
      color: "#fff",
    },
    tabList: {
      borderRadius: "16px",
      color: "#fff",
    },
  };
}

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  borderBottom: "0px none transparent",
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    background: "transparent",
    height: "48px",
  },
  "& .MuiTabs-indicatorSpan": {
    color: "#FFFFFF",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    // marginRight: theme.spacing(1),
    borderRadius: "16px 0px 0px 0px",
    borderColor: "none",
    borderStyle: "solid",
    // borderWidth: "1px",
    color: "#B1B1B1",
    background: "#2C2C2C",
    "&.Mui-selected": {
      color: "#fff",
      zIndex: "1",
      borderRadius: "16px 0px 0px 0px",
      background: "#363636",
      // borderWidth: "0px",
    },
    "&.Mui-focusVisible": {
      // backgroundColor: "#FFFFFF",
      // borderRadius: "12px",
    },
  })
);

const StyledTab2 = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    // marginRight: theme.spacing(1),
    borderRadius: "0px 16px 0px 0px",
    borderColor: "none",
    borderStyle: "solid",
    // borderWidth: "1px",
    color: "#B1B1B1",
    background: "#2C2C2C",
    "&.Mui-selected": {
      color: "#fff",
      zIndex: "1",
      borderRadius: "0px 16px 0px 0px",
      background: "#363636",
      // borderWidth: "0px",
    },
    "&.Mui-focusVisible": {
      // backgroundColor: "#FFFFFF",
      // borderRadius: "12px",
    },
  })
);
