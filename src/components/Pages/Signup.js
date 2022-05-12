import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useSignupMutation } from "../redux/loginapi/loginSlice";
import "./form.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useSelector } from "react-redux";
export default function Signup() {
  const stateData = {
    name: "",
    email: "",
    phone_number: "",
    password: "",
    emp_id: "",
    // gender:""
  };
  const [formData, setFormData] = useState(stateData);
  const [error1, setError1] = useState({});
  const [submit, setSubmit] = useState(false);
  const [signup, { isLoading, data, error, access_token }] =
    useSignupMutation();
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setError1(validateForm(formData));
    localStorage.setItem("formdata", JSON.stringify(formData));
    signup(formData);
    if (data) {
      console.log(data, "data");
    }
  }

  function validateForm(val) {
    const err = {};
    if (!val.name) {
      err.name = "Please Fill this feild ";
    }
    if (!val.email) {
      err.email = "Email feild is required ";
    }
    if (!val.emp_id) {
      err.employe_id = "Employe Id  is mandatory ";
    }
    if (!val.phone_number) {
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
                  value={formData.emp_id}
                  name="emp_id"
                  type="number"
                  onChange={handleChange}
                  fullWidth
                />
                <p>{error1.emp_id}</p>
              </Grid>
              <Grid item md={12}>
                <TextField
                  id="Username"
                  label="Mobile Number"
                  variant="outlined"
                  value={formData.phone_number}
                  name="phone_number"
                  onChange={handleChange}
                  fullWidth
                />
                <p>{error1.phone_number}</p>
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
              {/* <Grid item md={12}>
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Female"
                        control={<Radio />}
                        label="Female"
                        onChange={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                        onChange={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                        onChange={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid> */}
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
