import React from "react";
import { NavLink } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Stack } from "@mui/system";
import { Checkbox, IconButton, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ClearIcon from "@mui/icons-material/Clear";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CourierUpdate = () => {
  const hoveredstyle = {
    cursor: "initial",
  };
  const classes = makeStyles(ownTheme)();
  return (
    <div className="customer container">
      <NavLink to={`/customer-type`} style={{ textDecoration: "none" }}>
        <Stack direction={"row"} alignItems={"center"}>
          <IconButton tooltip="Description here" hoveredstyle={hoveredstyle}>
            <ChevronLeftIcon className={classes.leftIcon} />
          </IconButton>
          <Typography className={classes.head}>Ulanyjy görnüşi</Typography>
        </Stack>
      </NavLink>
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
              <TableCell>
                <Typography className={classes.title}>
                  Ulanyjy görnüşi
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.title}>Goshmacha</Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.title}>Okamak</Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.title}>Yazmak</Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.title}>Uytgetmek</Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.title}>Pozmak</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.itemContainer}>
              <TableCell>
                <Typography className={classes.name}>Eltip beriji</Typography>
              </TableCell>
              <TableCell>
                <Stack spacing={2}>
                  <Typography className={classes.name}>Sargytlar</Typography>
                  <Typography className={classes.name}>Mushderiler</Typography>
                </Stack>
              </TableCell>
              <TableCell className={classes.title}>
                {" "}
                <Stack ml={-10}>
                  <Checkbox
                    {...label}
                    icon={<CheckIcon className={classes.checkIcon} />}
                    checkedIcon={<ClearIcon className={classes.clearIcon} />}
                  />
                  <Checkbox
                    {...label}
                    icon={<CheckIcon className={classes.checkIcon} />}
                    checkedIcon={<ClearIcon className={classes.clearIcon} />}
                  />
                </Stack>
              </TableCell>
              <TableCell className={classes.title}>
                {" "}
                <Stack ml={-10}>
                  <Checkbox
                    {...label}
                    icon={<CheckIcon className={classes.checkIcon} />}
                    checkedIcon={<ClearIcon className={classes.clearIcon} />}
                  />
                  <Checkbox
                    {...label}
                    icon={<CheckIcon className={classes.checkIcon} />}
                    checkedIcon={<ClearIcon className={classes.clearIcon} />}
                  />
                </Stack>
              </TableCell>
              <TableCell className={classes.title}>
                {" "}
                <Stack ml={-10}>
                  <Checkbox
                    {...label}
                    icon={<CheckIcon className={classes.checkIcon} />}
                    checkedIcon={<ClearIcon className={classes.clearIcon} />}
                  />
                  <Checkbox
                    {...label}
                    icon={<CheckIcon className={classes.checkIcon} />}
                    checkedIcon={<ClearIcon className={classes.clearIcon} />}
                  />
                </Stack>
              </TableCell>
              <TableCell className={classes.title}>
                {" "}
                <Stack ml={-10}>
                  <Checkbox
                    {...label}
                    icon={<CheckIcon className={classes.checkIcon} />}
                    checkedIcon={<ClearIcon className={classes.clearIcon} />}
                  />
                  <Checkbox
                    {...label}
                    icon={<CheckIcon className={classes.checkIcon} />}
                    checkedIcon={<ClearIcon className={classes.clearIcon} />}
                  />
                </Stack>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CourierUpdate;

function ownTheme() {
  return {
    checkIcon: {
      color: "#5FFD6E",
    },
    clearIcon: {
      color: "#FF4646",
    },
    title: {
      color: "#b1b1b1",
    },
    name: {
      color: "#fefefe",
    },
    head: {
      color: "#fefefe",
    },
    leftIcon: {
      color: "#fefefe",
    },
  };
}
