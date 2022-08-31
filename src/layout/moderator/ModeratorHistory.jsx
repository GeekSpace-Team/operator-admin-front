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
  top: "45%",
  left: "55%",
  overflow: true,
  transform: "translate(-50%, -50%)",
  width: "60%",
  display: "block",
  borderRadius: "16px",
  bgcolor: "#363636",
  boxShadow: 24,
  color: "#fff",
  p: 4,
};

const ModeratorHistory = (props) => {
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
          <Stack justifyContent={"center"} direction={"row"}>
            <Typography
              style={{
                fontSize: "26px",
                fontFamily: "nunito",
                fontWeight: "600",
                letterSpacing: "2px",
              }}
            >
              Moderatoryň taryhy
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
                          <TableCell>{e.device_name}</TableCell>
                          <TableCell>{e.type}</TableCell>
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

export default ModeratorHistory;
