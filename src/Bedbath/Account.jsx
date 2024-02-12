import React from "react";
import Checkbox from "@mui/material/Checkbox";
import AssignmentLateOutlinedIcon from "@mui/icons-material/AssignmentLateOutlined";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

function CreateAccountForm() {
  const label = {};
  const formData = {
    email: "",
    password: "",
  };

  const handleInputChange = (event) => {
    // Handle input changes
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
        <IconButton size="large" color="inherit">
          <PersonAddIcon sx={{ fontSize: 30, color: "black", marginRight: "8px" }} />
          <h6 style={{ margin: 0 }}>Create Account</h6>
        </IconButton>
      </Box>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      ></Box>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleInputChange}
            required
            type="email"
            name="email"
            
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
          <Checkbox {...label} defaultChecked />
          <p style={{ margin: 0, marginLeft: "8px" }}>Keep me signed in.</p>

          <IconButton size="large" color="inherit" style={{ marginLeft: "8px" }}>
            <AssignmentLateOutlinedIcon sx={{ fontSize: 20, color: "black" }} />
          </IconButton>
        </div>

        <Button
          type="submit"
          variant="outlined"
          startIcon={<LockOutlinedIcon />}
        >
          Create Account
        </Button>
      </form>
    </div>
  );
}

export default CreateAccountForm;
