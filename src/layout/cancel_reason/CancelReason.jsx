import React from "react";
import AddCircleOutlined from "@mui/icons-material/AddCircleOutlined";
import {
  Button,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/system";
import DeleteCancelReason from "./DeleteCancelReason";
import UpdateCancelReason from "./UpdateCancelReason";
import { AxiosInstance } from "../../api-interface/api/AxiosInstance.mjs";
import { useState } from "react";
import { showError, showSuccess } from "../../view/helper/Alert/Alert";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import Loading from "../../common/Loading";
import Empty from "../../common/Empty";

const CancelReason = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [list, setList] = useState([]);
  const [sell_point_id, setSell_point_id] = useState("");
  const [add_cancel_reason, setAddCancelReason] = useState([]);
  const [value, setValue] = useState("");
  const [isEmptyPage, setEmptyPage] = useState(false);
  const [selPoint, setSelPoint] = useState([]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setSell_point_id(event.target.value);
  };

  const getData = async () => {
    await AxiosInstance.get("/admin/get-cancel-reason")
      .then((res) => {
        if (!res.data.error) {
          setList(res.data.body);
        }
      })
      .catch((err) => {
        showError(err + "");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const getSellPoint = async () => {
    await AxiosInstance.get("/admin/get-sell-point")
      .then((resp) => {
        if (!resp.data.err) {
          setSelPoint(resp.data.body);
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
    getSellPoint();
  }, []);

  const addCancelReason = async () => {
    const data = {
      sell_point_id: sell_point_id,
      value: value,
    };
    await AxiosInstance.post("/admin/add-cancel-reason", data)
      .then((resp) => {
        if (!resp.data.err) {
          getData();
          showSuccess("Üstünlikli goşuldy !!!");
          handleClose();
          setValue("");
          setSell_point_id("");
        }
      })
      .catch((err) => {
        showError(err + "");
      });
  };

  return (
    <div className="moderator container">
      <ToastContainer />
      {/* ************************************************************************************************************************ */}
      {/* ____________________________________________________ Add Cancel Reason section starts here ______________________________*/}
      {/* ************************************************************************************************************************ */}
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography
          style={{
            fontSize: "24px",
            fontWeight: "600",
            fontFamily: "nunito",
            color: "#FEFEFE",
          }}
        >
          Yzyna gaýtarmagyň sebäpleri
        </Typography>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant={"contained"}
          style={{
            textTransform: "none",
            letterSpacing: "1px",
            borderRadius: "16px",
            background: "#5E9CCE",
            fontWeight: "600",
            color: "#fefefe",
            height: "33px",
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
          <Stack direction={"column"} spacing={2} p={1}>
            <TextField
              fullWidth
              id="filled-basic"
              label="Sebäbi..."
              variant="filled"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

            {/* <FormControl variant="filled" fullWidth>
              <InputLabel id="demo-simple-select-filled-label">
                Söwda nokady
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={sell_point_id}
                onChange={handleChange}
              >
                {selPoint.map((item, i) => {
                  return <MenuItem value={item.id}>{item.name}</MenuItem>;
                })}
              </Select>
            </FormControl> */}
            <Button
              fullWidth
              variant={"contained"}
              style={{
                background: "#5E9CCE",
                borderRadius: "16px",
                textTransform: "none",
                fontWeight: " 600",
                fontFamily: "nunito",
                color: "#fefefe",
              }}
              onClick={() => addCancelReason()}
              sx={{ mt: 1 }}
            >
              Goş
            </Button>
          </Stack>
        </Menu>
      </Stack>
      {/* ********************************************************************************************************************************* */}
      {/* _________________________________________________Add Cancel Reason section ends here ____________________________________________ */}
      {/* ********************************************************************************************************************************** */}
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
                    ID
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#b1b1b1",
                      fontFamily: "nuntio",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Sebäbi
                  </TableCell>
                  {/* <TableCell
                    style={{
                      color: "#b1b1b1",
                      fontFamily: "nuntio",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Söwda nokadyň ady
                  </TableCell> */}
                  <TableCell
                    style={{
                      color: "#b1b1b1",
                      fontFamily: "nuntio",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Goşmaça
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.map((item, i) => {
                  return (
                    <>
                      <TableRow key={`get_cancel_reason_key${i}`}>
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
                        >
                          {item.reason}
                        </TableCell>
                        {/* <TableCell
                          style={{
                            color: "#fefefe",
                            fontFamily: "nuntio",
                            fontSize: "16px",
                            fontWeight: "600",
                          }}
                        >
                          {item.sell_point_name}
                        </TableCell> */}
                        <TableCell>
                          <Stack direction={"row"} spacing={2}>
                            <UpdateCancelReason
                              getData={getData}
                              unique_id={item.unique_id}
                              item={item}
                              selPoint={selPoint}
                            />
                            <DeleteCancelReason
                              getData={getData}
                              unique_id={item.unique_id}
                              reason={item.reason}
                            />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    </>
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

export default CancelReason;
