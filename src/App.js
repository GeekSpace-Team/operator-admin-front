import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courier from "./layout/courier/Courier";
import CustomerType from "./layout/customer-type/CustomerType";
import Moderator from "./layout/moderator/Moderator";
import Operator from "./layout/operator/Operator";
import Question from "./layout/question/Question";
import Statistica from "./layout/statistica/Statistica";
import StoreLocation from "./layout/store-location/StoreLocation";
import Sidebar from "./Sidebar";

function App() {
  // console.log = () => {};
  console.error = () => {};
  console.warning = () => {};
  console.warn = () => {};
  console.info = () => {};
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Statistica />} /> */}
          <Route path="/" element={<Sidebar />}>
            <Route path="/statistica" element={<Statistica />} />
            <Route path="/moderator" element={<Moderator />} />
            <Route path="/operator" element={<Operator />} />
            <Route path="/store-location" element={<StoreLocation />} />
            <Route path="/courier" element={<Courier />} />
            <Route path="/question" element={<Question />} />
            <Route path="/customer-type" element={<CustomerType />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
