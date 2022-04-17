import React from "react";
import AllCards from "../Cards/AllCards";
import AdList from "../Cards/AdList";
import { Button, Box } from "@mui/material";

function Technology() {
  
  const [showAd, setShowAd] = React.useState(true)
  const onClick = () => setShowAd(false)

  const urlTechnology = 'https://newsapi.org/v2/top-headlines?country=il&category=technology&apiKey=66fe6a53463a4af9a88b861510ee56af';

  return (
    <Box sx={{ display: 'flex'}}>
      { showAd ? 
        <Box>
          <Box sx={{left: '78%', position: 'absolute'}}>
            <Button onClick={onClick} sx={{bgcolor: '#3d5afe', color: '#212121', marginTop: '2vh'}}>X</Button>
            <AdList /> 
          </Box>
          <Box sx={{width: '77%'}}>
            <AllCards ttype={urlTechnology} />   
          </Box>
        </Box> 
        : 
        <AllCards ttype={urlTechnology} />   
      } 
    </Box>
  );
}

export default Technology;