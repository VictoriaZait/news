import React from "react";
import AllCards from "../Cards/AllCards";
import AdList from "../Cards/AdList";
import { Box } from "@mui/material";

function Health() {
  return (
    <Box sx={{ display: 'flex'}}>
      <AllCards ttype='https://newsapi.org/v2/top-headlines?country=il&category=health&apiKey=66fe6a53463a4af9a88b861510ee56af' />
      < Box sx={{left: '75%', position: 'absolute'}}>
        <AdList />
      </Box>
    </Box>
  );
}

export default Health;
