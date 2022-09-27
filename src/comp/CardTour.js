import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
function App({tour}) { 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia height="150"><div className='CardImage'>{tour.image}</div></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {tour.name}
        </Typography>
        <div className='CardContent'>
            <div className='time'><AccessTimeIcon color='secondary'/>{tour.duree} Days</div>
            <div className='ExPrix'>${tour.exprix}</div>
        </div>
        <div className='CardContent'>
            <div><Rating name="read-only"  value={tour.rate} readOnly /></div>
            <div className='CardPrix'>${tour.prix}</div>
        </div>
      </CardContent>

    </Card>
  );
}
export default App;