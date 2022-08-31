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
import { Button, Checkbox, IconButton, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ClearIcon from "@mui/icons-material/Clear";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const OperatorUpdate = () => {
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
              <TableCell className={classes.title}>Ulanyjy gornushi</TableCell>
              <TableCell className={classes.title}>Goshmacha</TableCell>
              <TableCell className={classes.title}>Okamak</TableCell>
              <TableCell className={classes.title}>Yazmak</TableCell>
              <TableCell className={classes.title}>Uytgetmek</TableCell>
              <TableCell className={classes.title}>Pozmak</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.itemContainer}>
              <TableCell className={classes.items}>Operator</TableCell>
              <TableCell className={classes.items}>
                <Stack>
                  <Typography>Sargytlar</Typography>
                  <Typography>Mushderiler</Typography>
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
        </Table>{" "}
        <Stack
          direction={"row"}
          p={4}
          pb={0}
          justifyContent={"flex-end"}
          spacing={3}
        >
          {" "}
          <Button
            variant="contained"
            style={{
              textTransform: "none",
              fontWeight: "600",
              color: "#fefefe",
              borderRadius: "16px",
              background: "#F61A1A",
            }}
          >
            Pozmak
          </Button>
          <Button
            variant="contained"
            style={{
              textTransform: "none",
              fontWeight: "600",
              color: "#fefefe",
              borderRadius: "16px",
              background: "#5E9CCE",
            }}
          >
            Ýatda sakla
          </Button>
        </Stack>
      </TableContainer>
    </div>
  );
};

export default OperatorUpdate;

function ownTheme() {
  return {
    checkIcon: {
      color: "#5FFD6E",
    },
    clearIcon: {
      color: "#FF4646",
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
