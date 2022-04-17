import React, { useState, useEffect } from "react";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";


function Ddialog(props) {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const descriptionElementRef = React.useRef(null);

  return (
    <div>  
      <Button sx={{ color: c, paddingBottom: 0}} onClick={handleClickOpen("paper")}>לצפיה בתקציר</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" fontWeight="fontWeightBold" style={{textAlign: "right", color: c, backgroundColor: bgd}}>
          {props.name}
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"} style={{backgroundColor: "#424242" }}>
          <DialogContentText 
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            color= {c}
            fontWeight="fontWeightBold"
            textAlign= "right"
          >
            {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{backgroundColor: bgd }}>
          <Button sx={{color: c}} onClick={handleClose}>סגירה</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const c = "#9e9e9e";
const bgd = "#212121";

export default Ddialog;