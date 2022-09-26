import { Card ,CardMedia,Typography } from "@mui/material";
import rio from "./assets/rio.png"
import { Rating } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
function dest() {

  return (
   <div className="act">
<Card sx={{ maxWidth: 900 }}>
<div className="contentCard">
<div className='CardImage'>
 <CardMedia height="100">
  <img src={rio} alt="egypte" className='egypte' />
 </CardMedia>
</div>
<div className="Des">
 <div className="Flex-top">
  <div className="TitleCardRegion">
    Robben Island Half Day Tour with Pre-Booked Tickets.
  </div>
  <div className="Price">
  <div>From</div>
  <div>90$</div>
  </div>
</div>
<div className="rating"><Rating name="read-only"  value={2} readOnly /></div>
<div className="DescriptionCardRegion">
Costa Rica is a natural wonderland. The tropical country features volcanoes to hike and lush rainforests to<br/> traverse
on foot or by zip line. Plus, it boasts a refreshingly laid-back culture. Relaxation seekers can<br/> immerse themselves
  in the pura vida lifestyle and bask at the beaches in Guanacaste or along the Nicoya Peninsula's roughly 80 miles<br/> 
  of coast. 
</div>
<div>
<div className='time'><AccessTimeIcon color='secondary'/>5 Days</div>
</div>



  
</div>

</div>
</Card>
   </div>
  );
}

export default dest;
