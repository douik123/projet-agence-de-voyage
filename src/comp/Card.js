import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {Link} from 'react-router-dom'

function App({tour}) { 
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia height="120"><div className='CardImage'>{tour.image}</div></CardMedia>
    <CardContent>
    <Link to={`${tour.link}`}><Typography gutterBottom variant="h5" component="div">
      {tour.name}
      </Typography></Link>
      <Typography gutterBottom variant="h9" component="div">
      {tour.description}
      </Typography>
      <div className='CardContent'>
          <div className='time'><AccessTimeIcon color='secondary'/>{tour.duree} Days</div>
          <div className='ExPrix'></div>
      </div>
      <div className='CardContent'>
          <div><Rating name="read-only"  value={tour.rate} readOnly /></div>
          <div className='CardPrix'><span className='a'>From</span> ${tour.prix}</div>
      </div>
    </CardContent>

  </Card>
  );
}
export default App;