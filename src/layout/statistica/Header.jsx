import { Stack } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";

const ITEM_HEIGHT = 68;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 270,
      marginLeft: 0,
      background: "#363636",
    },
  },
};

const Header = () => {
  return (
    <div>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        className={"header"}
      >
        <label>Statistics</label>
        <Box style={{ outline: "none" }}>
          <FormControl
            style={{
              width: "150px",
              border: "1px solid #b1b1b1",
              borderRadius: "50px",
              outline: "none",
            }}
          >
            <InputLabel
              style={{
                marginTop: "-12px",
                color: "#b1b1b1",
              }}
              id="demo-simple-select-label"
            >
              Filter
            </InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Filter"
              style={{
                borderRadius: "50px",
                outline: "none",
                height: "40px",
                padding: "20px",
                textAlign: "center",
              }}
              MenuProps={MenuProps}
            >
              <Stack p={2} mb={-2}>
                <label style={{ color: "#fefefe", fontWeight: "600" }}>
                  Wagt boyunca
                </label>
              </Stack>
              <Stack p={2} mb={-2} direction="row" alignItems="center">
                {" "}
                <Stack
                  alignItems="center"
                  p={0.3}
                  pl={2}
                  pr={1}
                  pt={0.4}
                  style={{
                    background: "#888888",
                    border: "1px solid #7E7E7E",
                    borderRadius: "2px 0px 0px 2px",
                  }}
                >
                  <label htmlFor="startDate">Start date</label>
                </Stack>
                <Stack
                  p={0.8}
                  alignItems="center"
                  style={{
                    background: "transparent",
                    borderRadius: "0px 2px 2px 0px",
                    border: "1px solid #7E7E7E",
                  }}
                >
                  <input
                    style={{
                      border: "none",
                      background: "transparent",
                      outline: "none",
                      appearance: "none",
                      MozAppearance: "none",
                    }}
                    type="date"
                  />
                </Stack>
              </Stack>
              <Stack p={2} direction="row" alignItems="center">
                {" "}
                <Stack
                  alignItems="center"
                  p={0.3}
                  pl={2}
                  pr={1.5}
                  pt={0.4}
                  style={{
                    background: "#888888",
                    border: "1px solid #7E7E7E",
                    borderRadius: "2px 0px 0px 2px",
                  }}
                >
                  <label htmlFor="endDate">End date</label>
                </Stack>
                <Stack
                  p={0.8}
                  alignItems="center"
                  style={{
                    background: "transparent",
                    borderRadius: "0px 2px 2px 0px",
                    border: "1px solid #7E7E7E",
                  }}
                >
                  <input
                    style={{
                      border: "none",
                      background: "transparent",
                      outline: "none",
                      appearance: "none",
                      MozAppearance: "none",
                    }}
                    type="date"
                  />
                </Stack>
              </Stack>
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </div>
  );
};

export default Header;
