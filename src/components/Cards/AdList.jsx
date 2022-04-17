import React, { useState, useEffect } from "react";
import { ListItem, ListItemText, Typography, CardMedia, Button, CircularProgress } from '@mui/material';

export default function AdList() {
  const [ad, setAd] = useState([]);
  useEffect(() => {
    (async () => {
      let res = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick`);
      let data = await res.json();
      setAd(data);
    })();
  }, []);

  return (
    <div>
      {ad.length ? (
        ad.map(singleAd => (
            <ListItem key={singleAd.id} sx={{width:'20vw', bgcolor: 'text.disabled', opacity: '70%'}}>
              <ListItemText
                primary={singleAd.name}
                sx={{color: c}}
                secondary={
                  <React.Fragment>
                    <Typography component="span" variant="h4" sx={{color: c}}>
                      Only {singleAd.price}$
                    </Typography>
                    <Typography component="span" variant="body2" sx={{color: c}}>
                      {singleAd.description}
                    </Typography>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="100"
                      src={singleAd.api_featured_image}
                      title="Contemplative Reptile"
                    />
                    <Button variant="outlined" color="primary" href={singleAd.website_link} target="_blank">לעוד מוצרים</Button>
                    <Button variant="outlined" color="primary" href={singleAd.product_link} target="_blank">לקניה</Button>          
                  </React.Fragment>
                }
              />
            </ListItem> 

          ))
          ) : (
            <CircularProgress sx={{
              position: 'absolute',
              top: '100%',
              left: '43%',
              color: "#a31545",
            }}/>
        )}
    </div>
  );
}
const c = '#3d5afe';