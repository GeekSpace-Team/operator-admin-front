import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courier from "./layout/courier/Courier";
import CustomerType from "./layout/customer-type/CustomerType";
import Moderator from "./layout/moderator/Moderator";
import Statistica from "./layout/statistica/Statistica";
import StoreLocation from "./layout/store-location/StoreLocation";
import Sidebar from "./Sidebar";
import StatisticaOperator from "./layout/statistica/statisticaOperator/StatisticaOperator";
import Operator from "./layout/operator/Operator";
import Status from "./layout/question/status/Status";
import FindUs from "./layout/question/findUs/FindUs";
import GurleyishAheni from "./layout/question/gurleyishAheni/GurleyishAheni";
import GurleyishTony from "./layout/question/gurleyishTony/GurleyishTony";
import SpeakMode from "./layout/question/speakMode/SpeakMode";
import SpeakTone from "./layout/question/speakTone/SpeakTone";
import OperatorUpdate from "./layout/customer-type/operatorUpdate/OperatorUpdate";
import CourierUpdate from "./layout/customer-type/courierUpdate/CourierUpdate";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CancelReason from "./layout/cancel_reason/CancelReason";
import { loginChecker } from "./common/utils.mjs";
import LoginPage from "./layout/login/LoginPage";

function App() {
  console.log = () => {};
  console.error = () => {};
  console.warning = () => {};
  console.warn = () => {};
  console.info = () => {};

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Sidebar />}>
              <Route index element={<Statistica />} />
              <Route
                path="/statisticaOperator"
                element={<StatisticaOperator />}
              />
              <Route path="/operator" element={<Operator />} />
              <Route path="/moderator" element={<Moderator />} />
              <Route path="/store-location" element={<StoreLocation />} />
              <Route path="/courier" element={<Courier />} />
              <Route path="/status" element={<Status />} />
              <Route path="/findUs" element={<FindUs />} />
              <Route path="/gurleyishAheni" element={<GurleyishAheni />} />
              <Route path="/gurleyishTony" element={<GurleyishTony />} />
              <Route path="/speakMode" element={<SpeakMode />} />
              <Route path="/speakTone" element={<SpeakTone />} />
              <Route path="/operatorUpdate" element={<OperatorUpdate />} />
              <Route path="/courierUpdate" element={<CourierUpdate />} />
              <Route path="/customer-type" element={<CustomerType />} />
              <Route path="/cancel_reason" element={<CancelReason />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
