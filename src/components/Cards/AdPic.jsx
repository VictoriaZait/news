import * as React from 'react';
import { styled, Box, ButtonBase } from '@mui/material';
  
export default function AdPic() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', p: 2 }}>
        <ImageButton
          focusRipple
          href="https://github.com/VictoriaZait"
          target="_blank"
          style={{
            width: '90vw',
            height: '70vh',
            left: '4vw'
          }}
        >
          <ImageSrc style={{ backgroundImage: `url('https://live.staticflickr.com/65535/52010563373_c284739e76_h.jpg')` }} />
        </ImageButton>
    </Box>
  );
}

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  }
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});