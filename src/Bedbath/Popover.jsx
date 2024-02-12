import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";


export default function MouseOverPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
               
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div> 
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      > 
        Furniture
      </Typography>
      <Popover
        id="mouse-over-popover" 
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >      

      <Button >Living Room </Button>
        <Typography sx={{ p: 1 }}>Sofa and Couches</Typography>
        <Typography sx={{ p: 1 }}>Sectionals</Typography>
        <Typography sx={{ p: 1 }}>Living Room Furniture</Typography>
        <Typography sx={{ p: 1 }}>Sofa and Couches</Typography>
        <Typography sx={{ p: 1}}>Sectionals</Typography>
        <Typography sx={{ p: 1 }}>Living Room Furniture</Typography>
        <Typography sx={{ p: 1 }}>Sofa and Couches</Typography>
        <Typography sx={{ p: 1 }}>Sectionals</Typography>
      </Popover>
    </div>
  );
}