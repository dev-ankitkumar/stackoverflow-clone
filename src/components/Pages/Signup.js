import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useSignupMutation } from "../redux/loginapi/loginSlice";
import "./form.css";

export default function Signup() {
  const stateData = {
    name: "",
    email: "",
    mobile: "",
    password: "",
    employe_id: "",
    gender: "",
  };
  const [formData, setFormData] = useState(stateData);
  const [error1, setError1] = useState({});
  const [submit, setSubmit] = useState(false);
  const [signup, { isLoading, data, error }] = useSignupMutation();
  // console.log(data);
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setError1(validateForm(formData));
    localStorage.setItem("formdata", JSON.stringify(formData));
    // if (Object.keys(error1).length == 0 && submit) {
    signup(formData);
    // }
    // setSubmit(true);
  }
  useEffect(() => {}, [error1]);
  function validateForm(val) {
    const err = {};
    if (!val.name) {
      err.name = "Please Fill this feild ";
    }
    if (!val.email) {
      err.email = "Email feild is required ";
    }
    if (!val.employe_id) {
      err.employe_id = "Employe Id  is mandatory ";
    }
    if (!val.mobile) {
      err.mobile = "Mobile number feild can't be empty ";
    }
    if (!val.password) {
      err.password = "Password feild is mandatory  ";
    }
    return err;
  }
  return (
    <>
      <div className="sign_up_container">
        <Paper elevation={20} className="paper_style paper">
          <form onSubmit={handleSubmit} autoComplete="off">
            <Grid container spacing={1}>
              <Grid item md={12}>
                <TextField
                  id="Type Name "
                  label="Name"
                  variant="outlined"
                  value={formData.name}
                  name="name"
                  onChange={handleChange}
                  fullWidth
                />
                <p>{error1.name}</p>
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
                <p>{error1.email}</p>
              </Grid>
              <Grid item md={12}>
                <TextField
                  id="Employe_id"
                  label="Employe Id"
                  variant="outlined"
                  value={formData.employe_id}
                  name="employe_id"
                  type="number"
                  onChange={handleChange}
                  fullWidth
                />
                <p>{error1.employe_id}</p>
              </Grid>
              <Grid item md={12}>
                <TextField
                  id="Username"
                  label="Mobile Number"
                  variant="outlined"
                  value={formData.mobile}
                  name="mobile"
                  onChange={handleChange}
                  fullWidth
                />
                <p>{error1.mobile}</p>
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
                <p>{error1.password}</p>
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
