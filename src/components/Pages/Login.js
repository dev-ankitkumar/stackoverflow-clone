import React, { useState } from "react";
import "./form.css";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { useLoginMutation } from "../redux/loginapi/loginSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error1, setError1] = useState({});

  const [login, { isLoading, data, error }] = useLoginMutation();
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <>
      <div className="login-page">
        <Paper elevation={20}>
          <form onSubmit={handleSubmit}>
            <Grid container rowSpacing={2}>
              <Grid item md={12}>
                <TextField
                  variant="outlined"
                  value={email}
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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
                  disabled={isLoading}
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
