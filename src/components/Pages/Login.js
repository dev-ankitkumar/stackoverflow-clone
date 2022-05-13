import React, { useEffect, useState } from "react";
import "./form.css";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { useLoginMutation } from "../redux/loginapi/loginSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const stateData = {
    email: "",
    password: "",
  };
  let navigate = useNavigate();

  const [loginData, setLoginData] = useState(stateData);
  const [error1, setError1] = useState({});
  const [submit, setSubmit] = useState(false);
  const [login, { isLoading, data, error, isSuccess }] = useLoginMutation();
  if (data) {
    localStorage.setItem("login", JSON.stringify(data.access_token));
    navigate("/");
    console.dir(data, "datatat");
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  function validation(val) {
    const err = {};
    if (!val.email) {
      err.email = "Email feild can't be empty ";
    }
    if (!val.password) {
      err.password = "Password feild  can't be empty ";
    }
    return err;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    const email = loginData.email;
    const password = loginData.password;
    login({ email, password });
    setError1(validation(loginData));
  };

  useEffect(() => {}, [error1]);

  return (
    <>
      <div className="login-page">
        <Paper elevation={20}>
          <form onSubmit={handleSubmit}>
            <Grid container rowSpacing={2}>
              <Grid item md={12}>
                <TextField
                  variant="outlined"
                  value={loginData.email}
                  name="email"
                  onChange={handleChange}
                  label="User Name"
                  fullWidth
                ></TextField>
                <p>{error1.email}</p>
              </Grid>
              <Grid item md={12}>
                <TextField
                  variant="outlined"
                  label="Password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  type="password"
                  fullWidth
                ></TextField>
                <p>{error1.password}</p>
              </Grid>
              <Grid item md={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </>
  );
}
