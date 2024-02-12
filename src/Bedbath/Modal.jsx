import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import SvgIcon from "@mui/material/SvgIcon";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CreateAccountForm from "./Account";
import SignIn from "./SignIn";
 
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500, // Increased the width to accommodate both forms horizontally
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 7,
  px: 7,
  pb: 7,
  display: "flex", // Display children horizontally
   
};

  

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <Box
          sx={{
            "& > :not(style)": {
              m: 2,
            },
          }}
        >
          <PermIdentityOutlinedIcon sx={{ fontSize: 32, color: "black" }} />
        </Box>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        
        <Box sx={style}>
          <CreateAccountForm />
          <div style={{ margin: "20px " }} /> {/* Add margin for separation */}
          <SignIn />
            
    
        </Box>
      </Modal>
 
    </div>
  );
}
