import { data } from "./Data";
import { Stack } from "@mui/material";
import React from "react";
import "../../style/statistica/statistica.css";
import Header from "./Header";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Statistica = () => {
  return (
    <div className="statistica container">
      <Header />
      <div className="moderatorTable StatisticaTable">
        <div className="moderatorTableTitle statistikTableTitle">
          <Stack direction="row" mt={1}>
            {data.map((item, i) => {
              return <label>{item.title}</label>;
            })}
          </Stack>
        </div>
        <div className="statisticTableItems">
          <Stack direction="row">
            <label>1</label>
            <label>Maraton , Berkarar sowda we dync alys merkezi</label>
            <label>110</label>
            <label>4</label>
            <label>1100 TMT</label>
            <KeyboardArrowRightIcon
              style={{
                borderRadius: "50px",
                background: "#585858",
              }}
            />
          </Stack>
        </div>
      </div>

      <TableContainer
        style={{
          background: "#363636",
          boxShadow: "0px 0px 10px rgba(129,129,129,0.15)",
          borderRadius: "16px",
          marginTop: "30px",
        }}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  color: "#B1B1B1",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                No
              </TableCell>
              <TableCell
                style={{
                  color: "#B1B1B1",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                Sowda nokady
              </TableCell>
              <TableCell
                style={{
                  color: "#B1B1B1",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                Satylan harytlar
              </TableCell>
              <TableCell
                style={{
                  color: "#B1B1B1",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                Otmen bolan harytlar
              </TableCell>
              <TableCell
                style={{
                  color: "#B1B1B1",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                Summa
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{
                  color: "#FEFEFE",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                1
              </TableCell>
              <TableCell
                style={{
                  color: "#FEFEFE",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                2
              </TableCell>
              <TableCell
                style={{
                  color: "#5FFD6E",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                3
              </TableCell>
              <TableCell
                style={{
                  color: "#FF4646",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                4
              </TableCell>
              <TableCell
                style={{
                  color: "#5AFFFF",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                5
              </TableCell>
              <TableCell>
                <KeyboardArrowRightIcon
                  style={{
                    borderRadius: "50px",
                    background: "#585858",
                  }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Statistica;
