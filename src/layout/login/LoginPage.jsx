import React, { useEffect, useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Button, Stack } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { AxiosInstance } from "../../api-interface/api/AxiosInstance.mjs";
import { showError } from "../../view/helper/Alert/Alert.jsx";
import "./login.css";

const LoginPage = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [start, setStart] = useState(false);

  const getData = () => {
    window.location.href = "/";
  };

  const handleClick = () => {
    // setIsLoading(true);
    const data = {
      username: username,
      password: password,
    };

    AxiosInstance.post("/admin/auth/sign-in", data)
      .then((response) => {
        // setIsLoading(false);
        if (!response.data.error) {
          window.sessionStorage.setItem("token", response.data.body.token);
          localStorage.setItem("my_token", response.data.body.token);
          localStorage.setItem("local_token", response.data.body.token);
          localStorage.setItem("userID", response.data.body.userId);
          localStorage.setItem("user_type", response.data.body.user_type);
          localStorage.setItem("unique_id", response.data.body.unique_id);
          localStorage.setItem("fullname", response.data.body.fullname);
          localStorage.setItem("phone_number", response.data.body.phone_number);
          localStorage.setItem(
            "sell_point_id",
            response.data.body.sell_point_id
          );
          localStorage.setItem("password", password);
          localStorage.setItem("username", username);
          getData();
        } else {
          showError("Username or password is incorrect!");
        }
      })
      .catch((err) => {
        // setIsLoading(false);
        showError(err + "");
      });
  };

  useEffect(() => {
    window.sessionStorage.setItem("token", "");
  }, []);

  return (
    <div className="loginPage">
      <div className="loginForm">
        <Stack>
          <div className="loginIcon">
            <Stack direction="column" alignItems="center" spacing={1} mt={3}>
              <AccountCircleOutlinedIcon style={{ fontSize: "70px" }} />
              <label>Set up your account</label>
            </Stack>
          </div>
          <div className="idForm">
            <Stack pl={2} mt={3} pr={2} spacing={1}>
              <label>Your ID</label>
              <input
                type="text"
                style={{ height: "55px" }}
                placeholder="john.doe@gmail.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Stack>
          </div>
          <div className="idForm">
            <Stack pl={2} pr={2} spacing={1}>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingTop: "20px" }}
                placeholder="* * * * * * * * * * * * * * * *"
              />
            </Stack>
          </div>
          <Stack pl={3} mt={3} pr={3}>
            {/* <LoadingButton
              loading={isLoading}
              variant="contained"
              fullWidth
              onClick={handleClick}
            >
              Login
            </LoadingButton> */}

            <Button
              style={{
                textTransform: "none",
                backgroundColor: "#5E9CCE",
                borderRadius: "32px",
                height: "45px",
              }}
              // loading={isLoading}
              variant="contained"
              fullWidth
              onClick={handleClick}
            >
              Log in
            </Button>
          </Stack>
        </Stack>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
