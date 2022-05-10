import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import "./form.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Signup() {
  const stateData = {
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    username: "",

    gender: "",
  };
  const [formData, setFormData] = useState(stateData);
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setError(validateForm(formData));
    localStorage.setItem("formdata", JSON.stringify(formData));
  }

  function validateForm(val) {
    const err = {};
    if (!val.firstname) {
      err.firstname = "Please Fill this feild ";
    }
    if (!val.lastname) {
      err.lastname = "Please Fill this feild ";
    }
    if (!val.email) {
      err.email = "Please Fill this feild ";
    }
    if (!val.username) {
      err.username = "Please Fill this feild ";
    }
    if (!val.password) {
      err.password = "Please Fill this feild ";
    }

    return err;
  }
  return (
    <>
      <div className="sign_up_container">
        <Paper elevation={20} className="paper_style paper">
          <form onSubmit={handleSubmit} autoComplete="off">
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TextField
                  id="Type Name "
                  label="First Name"
                  variant="outlined"
                  value={formData.firstname}
                  name="firstname"
                  onChange={handleChange}
                  fullWidth
                />
                <p>{error.firstname}</p>
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="Type Last Name"
                  label="Last Name "
                  variant="outlined"
                  value={formData.lastname}
                  name="lastname"
                  onChange={handleChange}
                  fullWidth
                />
                <p>{error.lastname}</p>
              </Grid>
              <Grid item md={12}>
                <TextField
                  id="Type Email"
                  label="Email"
                  variant="outlined"
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
                  fullWidth
                />
                <p>{error.email}</p>
              </Grid>
              <Grid item md={12}>
                <TextField
                  id="Username"
                  label="Username"
                  variant="outlined"
                  value={formData.username}
                  name="username"
                  onChange={handleChange}
                  fullWidth
                />
                <p>{error.username}</p>
              </Grid>
              <Grid item md={12}>
                <TextField
                  id="Type Password"
                  label="Password"
                  variant="outlined"
                  value={formData.password}
                  name="password"
                  type="password"
                  onChange={handleChange}
                  fullWidth
                />
                <p>{error.password}</p>
              </Grid>

              <Grid item md={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </>
  );
}
