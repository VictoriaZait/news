import React, { useState, useEffect } from "react";
import { Grid, CardMedia, Card, Typography, Stack, Button } from "@mui/material";
import Ddialog from "./Ddialog";

function FlashCards(props) {
  // set the flashNew`s data
  const [flashnews, setFlashnews] = useState([]);
  useEffect(() => {
    fetch(props.ttype)
    .then((res) => res.json())
.then((data)=> setFlashnews(data.articles))
.catch((error) => {
  console.log("Error", error);
});
    //     (async () => {
    //   let res = await fetch(props.ttype);
    //   let data = await res.json();
    //   setFlashnews(data.articles);
    // })();
  }, [props]);

  return (
      <Grid container spacing={2} style={{marginTop: '1.5vh', justifyContent: 'center'}}>
        {flashnews.length ? (
          flashnews.map((a, i) => (
            <Grid key={i} item md={3}>
              <Card style={{backgroundColor: bgc, borderRadius: '5px'}}>
                <CardMedia
                    component="img"
                    height="100vh"
                    src={a.urlToImage}
                    title={a.title}
                  />
                <Typography variant="h6" style={{ color: bc, textAlign: "center"}}>
                  {a.title}
                </Typography>
                <Stack justifyContent="space-between" spacing={3} direction="row">
                <Button sx={{ color: bc}} href={a.url} target="_blank">המשך לכתבה המלאה</Button>
                <Ddialog description={a.description} name={a.source.name}/>
                <Typography variant="caption" style={{ color: bc, textAlign: "right", padding: 7}} >
                  {a.publishedAt.replace("T", " ").replace("Z", "")}
                </Typography>
               </Stack>
              </Card>
            </Grid>
          ))
        ) : (
          // when loading the page
          <img  
            style={{
              width: '90vw',
              height: '70vh',
              left: '4vw'
            }}
            src={`https://i.ibb.co/ZYJ5fjd/vict-logos-transparen2t-2.png`}
            alt="victoriaZaitLogo"
          />
        )}
      </Grid>
  );
}

const bc = "#9e9e9e";
const bgc = "#212121";


export default FlashCards;