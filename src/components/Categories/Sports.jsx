import React from "react";
import AllCards from "../Cards/AllCards";
import { Button, Box } from "@mui/material";
import AdPic from "../Cards/AdPic";

function Sports() {
  
  const [showAd, setShowAd] = React.useState(true)
  const onClick = () => setShowAd(false)

  const urlSports = 'https://newsapi.org/v2/top-headlines?country=il&category=sports&apiKey=66fe6a53463a4af9a88b861510ee56af';

  return (
    <Box sx={{ display: 'flex'}}>
      { showAd ? 
        <Box sx={{position: 'absolute', top: 30}}>
          <Button variant="outlined" color="error" onClick={onClick}>X מעבר לספורט</Button>
          <AdPic />
        </Box> 
        : 
        <AllCards ttype={urlSports}/>   
      } 
    </Box>
  );
}

export default Sports;

