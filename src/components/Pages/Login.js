import React, { useState } from "react";
import "./form.css";
import { Button, Grid, Paper, TextField } from "@mui/material";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="login-page">
        <Paper elevation={20}>
          <form onSubmit={handleSubmit}>
            <Grid container rowSpacing={2}>
              <Grid item md={12}>
                <TextField
                  variant="outlined"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  label="User Name"
                  fullWidth
                ></TextField>
              </Grid>
              <Grid item md={12}>
                <TextField
                  variant="outlined"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  fullWidth
                ></TextField>
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
