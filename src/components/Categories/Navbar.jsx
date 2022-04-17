import React, { useState, useEffect } from "react";
import { Box, AppBar, Button, Avatar } from "@mui/material";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import Entertainment from "./Entertainment";
import Technology from "./Technology";
import FlashNews from "./FlashNews";
import TodayTime from "./TodayTime";
import Business from "./Business";
import Science from "./Science";
import Sports from "./Sports";


export default function Navbar() {
  // Navigation between pages
  const [route, setRoute] = useState(window.location.hash.substring(1));
  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setRoute(window.location.hash.substring(1));
    });
  }, []);
  let SetCategoryComponent;
  function getSelectedCategory() {
    switch (route) {
      case "/FlashNews":
        SetCategoryComponent = FlashNews;
        break;
      case "/Business":
        SetCategoryComponent = Business;
        break;
      case "/Entertainment":
        SetCategoryComponent = Entertainment;
        break;
      case "/Science":
        SetCategoryComponent = Science;
        break;
      case "/Sports":
        SetCategoryComponent = Sports;
        break;
      case "/Technology":
        SetCategoryComponent = Technology;
        break;
      default:
        SetCategoryComponent = FlashNews;
    }
  }

  // press avatar
 function backHome() {
    window.open('http://localhost:3000/',"_self")
  }

  return (
    <Box>
      {getSelectedCategory()}
      <AppBar position="fixed" style={{ height: '12%', background: bgc }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-around'}}>
          <Avatar onClick={backHome} sx={{ width: 80, height: 78 }} src="https://i.ibb.co/0DShzby/victoria-zait-logos-transparent.png" alt="vicNew`s"  />    
          {categoriesBtn.map(({hrefBtn, nameBtn})=>(
            <Button key={hrefBtn} style={{ color: btnCGrey }} href={hrefBtn}><h3>{nameBtn}</h3></Button>
          ))}
        </Box>
        <p style={{
            background: {bgc}, 
            color: {btnCGrey},   
            opacity: "50%", 
            height: 26,
            position: "absolute",
            top: '5vh',
            right: '0.5vw'
        }}>
          <TodayTime />
          
          <WatchLaterIcon />
        </p>
      </AppBar>
      {/* Child for view the selected category */}
      <Box sx={{
            position: 'absolute',
            backgroundSize: 'cover',
            top: '11vh',
            backgroundColor: "#616161",
            width: '100%',
            minHeight: '90vh'
      }}>
        <SetCategoryComponent />
      </Box>
    </Box>
  );
}

const categoriesBtn = [
  { hrefBtn:"#/Business", nameBtn:"עסקים"},
  { hrefBtn:"#/Entertainment", nameBtn:"בידור"},
  { hrefBtn:"#/Sports", nameBtn:"ספורט"},
  { hrefBtn:"#/Science", nameBtn:"מדע"},
  { hrefBtn:"#/Technology", nameBtn:"טכנולוגיה"},
  { hrefBtn:"#/FlashNews", nameBtn:"מבזקים"},
];

// style
const bgc= "#212121";
const btnCGrey="#9e9e9e";

