import React from "react";
import {
  Button,
  IconButton,
  Modal,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import HistoryIcon from "@mui/icons-material/History";
import {
  convertTimeStampToDate,
  convertTimeStampToTime,
} from "../../common/utils.mjs";

const style = {
  position: "absolute",
  height: "100%",
  left: "30%",
  overflow: "scroll",
  width: "50%",
  bgcolor: "#363636",
  border: "transparent",
  boxShadow: "0px 0px 10px rgba(129, 129, 129, 0.15)",
  color: "#fff",
  p: 4,
};

const CourierHistory = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const checkList = (list) => {
    try {
      let t = list[0];
      return true;
    } catch (err) {
      return false;
    }
  };
  return (
    <div>
      <IconButton
        color="primary"
        onClick={handleOpen}
        aria-label="add to shopping cart"
      >
        <HistoryIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack justifyContent={"center"} direction={"row"} mb={4}>
            <Typography
              style={{
                fontSize: "26px",
                fontFamily: "nunito",
                fontWeight: "600",
                letterSpacing: "2px",
              }}
            >
              Operatoryň taryhy
            </Typography>
          </Stack>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "#b1b1b1" }}>Wagty</TableCell>
                  <TableCell style={{ color: "#b1b1b1" }}>
                    Enjamyň ady
                  </TableCell>
                  <TableCell style={{ color: "#b1b1b1" }}>Görnüşi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {checkList(props.item.login_history)
                  ? props.item.login_history.map((e, i) => {
                      return (
                        <TableRow>
                          <TableCell>{`${convertTimeStampToDate(e.created_at)} /
                            ${convertTimeStampToTime(e.created_at)}
                          `}</TableCell>
                          <TableCell style={{ textTransform: "uppercase" }}>
                            {e.device_name == null
                              ? "belli däl"
                              : e.device_name}
                          </TableCell>
                          <TableCell
                            style={{
                              color: e.type == 1 ? "#06C619" : "#F61A1A",
                              fontWeight: "600",
                            }}
                          >
                            {e.type == 1 ? "Girdi" : "Çykdy"}
                          </TableCell>
                        </TableRow>
                      );
                    })
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack direction={"row"} justifyContent={"flex-end"} mt={3}>
            <Button
              onClick={handleClose}
              variant="contained"
              style={{
                background: "#F61A1A",
                textTransform: "none",
                fontFamily: "nunito",
                borderRadius: "16px",
                color: "#fefefe",
                fontWeight: "600",
              }}
            >
              Çykmak
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default CourierHistory;
