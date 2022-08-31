import { Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddStore from "./AddStore";
import { AxiosInstance } from "../../api-interface/api/AxiosInstance.mjs";
import { showError } from "../../view/helper/Alert/Alert";
import DeleteSellPoint from "./DeleteSellPoint";
import UpdateSellPoint from "./UpdateSellPoint";
import { Searc, SearchIconn } from "../../view/common-view/Search";
import "../../style/store/store.css";
import Loading from "../../common/Loading";
import Empty from "../../common/Empty";
import SearchIcon from "@mui/icons-material/Search";

const StoreLocation = () => {
  const classes = makeStyles(ownStyles)();
  const [isEmptyPage, setEmptyPage] = useState(false);
  const [list, setList] = useState([]);

  const getStore = async () => {
    await AxiosInstance.get("/admin/get-sell-point")
      .then((resp) => {
        if (!resp.data.err) {
          setList(resp.data.body);
          setSList(resp.data.body);
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
    getStore();
  }, []);

  const [slist, setSList] = useState([]);

  const [sValue, setSValue] = useState("");

  const searchFunction = () => {
    if (sValue === "") {
      return list;
    } else {
      return list.filter((e, i) => {
        return (
          e.name.toUpperCase().includes(sValue.toUpperCase()) ||
          e.phone_number.toUpperCase().includes(sValue.toUpperCase()) ||
          e.address.toUpperCase().includes(sValue.toUpperCase())
        );
      });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSList(searchFunction());
    }
  };

  useEffect(() => {
    if (sValue === "") {
      setSList(searchFunction());
    }
  }, [sValue]);
  return (
    <div className="store container">
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        columns={12}
        alignItems={"center"}
      >
        <Grid item md={6} lg={6} className="header">
          <Typography
            style={{
              fontSize: "24px",
              fontWeight: "600",
              fontFamily: "nunito",
              color: "#FEFEFE",
            }}
          >
            Söwda nokatlar
          </Typography>
        </Grid>
        <Grid item lg={6} md={6}>
          <Stack
            justifyContent={"flex-end"}
            direction="row"
            alignItems="center"
            spacing={3}
          >
            <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <Searc>
                <div>
                  <input
                    type="text"
                    style={{ color: "#fefefe" }}
                    placeholder="Gozleg"
                    value={sValue}
                    onChange={(e) => setSValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                </div>
                <SearchIconn>
                  <SearchIcon />
                </SearchIconn>
              </Searc>
              <AddStore getStore={getStore} />
            </Stack>
          </Stack>
        </Grid>
      </Grid>{" "}
      {(typeof slist === "undefined" || slist.length <= 0) && !isEmptyPage ? (
        <Loading />
      ) : (typeof slist === "undefined" || slist.length <= 0) && isEmptyPage ? (
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
                    ID
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
                    Salgysy
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
                    Telefon belgisi
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
                    Goşmaça
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {slist.map((item, i) => {
                  return (
                    <TableRow>
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
                          color: "#fefefe",
                          fontFamily: "nuntio",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                        align="left"
                      >
                        {item.address}
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
                        {item.phone_number}
                      </TableCell>

                      <TableCell align="left">
                        <Stack direction={"row"} spacing={3}>
                          <UpdateSellPoint
                            getStore={getStore}
                            unique_id={item.unique_id}
                            item={item}
                          />
                          <DeleteSellPoint
                            getStore={getStore}
                            unique_id={item.unique_id}
                            name={item.name}
                          />
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

export default StoreLocation;
function ownStyles() {
  return {
    title: {
      color: "#b1b1b1",
      fontFamily: "nunito",
    },
    items: {
      color: "#fefefe",
    },
    active: {
      color: "#06C619",
    },
    passive: {
      color: "#BA9B9B",
    },
    titlee: {
      color: "#fefefe",
      fontSize: "22px",
      fontWeight: "600",
    },
  };
}
