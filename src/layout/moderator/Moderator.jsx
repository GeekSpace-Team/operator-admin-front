import React from "react";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import Open from "./Open";
import Delete from "./Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core/styles";
import "../../style/moderator/moderator.css";
import { AxiosInstance } from "../../api-interface/api/AxiosInstance.mjs";
import { showError } from "../../view/helper/Alert/Alert";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Loading from "../../common/Loading";
import Empty from "../../common/Empty";
import { Searc, SearchIconn } from "../../view/common-view/Search";
import AddModerator from "./AddModerator";
import ModeratorHistory from "./ModeratorHistory";
import SearchIcon from "@mui/icons-material/Search";
//
const Moderator = () => {
  const classes = makeStyles(ownStyles)();
  const [isEmptyPage, setEmptyPage] = useState(false);
  const [list, setList] = useState([]);

  const getModerator = async () => {
    await AxiosInstance.get("/admin/get-users-by-role-name?role=moderator")
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
    getModerator();
  }, []);

  const [slist, setSList] = useState([]);

  const [sValue, setSValue] = useState("");

  const searchFunction = () => {
    if (sValue === "") {
      return list;
    } else {
      return list.filter((e, i) => {
        return (
          e.fullname.toUpperCase().includes(sValue.toUpperCase()) ||
          e.phone_number.toUpperCase().includes(sValue.toUpperCase())
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
    <div className="moderator container">
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
            Moderatorlar
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
              <AddModerator getModerator={getModerator} />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
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
                    Doly ady
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
                    Ulanyjy belgisi
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
                    Söwda nokadyň belgisi
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
                    Statusy
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
                    <TableRow key={`get_moderator_key${i}`}>
                      <TableCell
                        style={{
                          color: "#fefefe",
                          fontFamily: "nuntio",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        {item.fullname}
                      </TableCell>
                      <TableCell
                        style={{
                          color: "#fefefe",
                          fontFamily: "nuntio",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                        align="center"
                      >
                        {item.user_number}
                      </TableCell>
                      <TableCell
                        style={{
                          color: "#fefefe",
                          fontFamily: "nuntio",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                        align="center"
                      >
                        {item.sell_point_id}
                      </TableCell>
                      <TableCell
                        style={{
                          color: item.status == 1 ? "#06C619" : "#BA9B9B",
                          fontFamily: "nuntio",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                        align="left"
                      >
                        {item.status == 1 ? "Işjeň" : "Işjeň däl"}
                      </TableCell>
                      <TableCell align="left">
                        <Stack direction={"row"} spacing={2}>
                          <Open
                            getModerator={getModerator}
                            item={item}
                            unique_id={item.unique_id}
                          />
                          <Delete
                            getModerator={getModerator}
                            unique_id={item.unique_id}
                            fullname={item.fullname}
                          />
                          <ModeratorHistory item={item} />
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default Moderator;

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
  };
}
