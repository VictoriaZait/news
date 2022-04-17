import React, { useState, useEffect } from "react";
import { Grid, CardMedia, Typography, Card, Stack, Button } from "@mui/material";
import CardAccordion from "./CardAccordion";

function AllCards(props) {
  // set the flashNew`s data
  const [news, setNews] = useState([]);
  useEffect(() => {
    (async () => {
  let res = await fetch(props.ttype);
  let data = await res.json();
  setNews(data.articles);
})();
}, [props]);

  return (
      <Grid container spacing={2} style={{marginTop: '1.5vh', padding:7, justifyContent: 'center'}}>
        {news.length ? (
          news.map((a, i) => (
            <Grid key={i} item md={4}>
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
                <CardAccordion description={a.description}/>
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


export default AllCards;