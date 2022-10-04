import privateguided from "../assets/privateguided.png"
import discoverpetropolis from "../assets/discoverpetropolis.png"
import privatecustom from "../assets/privatecustom.png"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Rating } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AffichageImage from './AffImage.js'
import { useParams } from "react-router-dom";
function Dest({paystours,activities,images,infopays,hotels,thingstodo}) {
  const {link}=useParams()
  let name="";
    return (
     <div>
        <div className="descriptionC">
        { 
        infopays.filter((pays)=>
          pays.link===link
        )
        .map(info=>(
         <div>
          <div><h1>Why Go To {name=info.name}</h1></div>
          
          <div className="descp">
          <div>{info.description}</div>
       </div>
          </div>
        ))
      } 
       <div className="descp">
       
       <div className="infoss">
     <div><h3>Best Hotels in {name}</h3></div>
      <div className="Hotels">
      { 
        hotels.filter((hotel)=>
          hotel.link===link
        )
        .map(infohotel=>(

         <div>{infohotel.description}</div>
       
        ))
      }
      </div>
      <div><h3>Best Things to Do in {name}</h3></div>
      <div className="ThingsToDo">
      { 
        thingstodo.filter((thingtodo)=>
        thingtodo.link===link
        )
        .map(infothingtodo=>(
          
          <div>{infothingtodo.description}</div>
       
        ))
      }
      </div>
      <div><AffichageImage/></div>
      </div>  
      </div>
      <div><h2>Cheap flight deals to {name}</h2></div>
      </div>
      <div className="Cards">
      {
        paystours.filter((paystour)=>
        paystour.paysname===link
      )
        .map(paystou=>(
            <Card sx={{ maxWidth: 345 }}>
            <CardContent>
            <div>
              <div className="VolCardContent">
             <div><FlightTakeoffIcon /></div>
             <div>
              <div>{paystou.date}</div>
              <div>{paystou.name}</div>
             </div>
             <div>{paystou.nbescale} escale(s)</div>
            </div>
            <div className='Prixvol'><span className='a'>    From   </span>   ${paystou.prix}<ArrowForwardIosIcon fontSize="10"/></div>
            </div>
            </CardContent>
        
          </Card>

           ))
         
      }
      </div>
      
            
      {
        <div className="TitleActivite"><h2>Tours by Duration</h2></div>
      }
        {
            activities.filter((activitie)=>
            activitie.paysname===link
          )
        .map(activitiee=>(
          <div className="act">
          <Card sx={{ maxWidth: 900 }}>
          <div className="contentCard">
          <div className='CardsImage'>
           <CardMedia width="600" >
           {activitiee.image}
           </CardMedia>
          </div>
          <div className="Des">
           <div className="Flex-top">
            <div className="TitleCardactivite">
            {activitiee.name}
            </div>
          </div>
          <div className="rating"><div><Rating name="read-only"  value={activitiee.rate} readOnly /><span className='a'>({activitiee.reviews} reviews)</span></div></div>
          <div className="DescriptionCardactivite">
          {activitiee.description}
          </div>
          <div>
          <div className='CardsPrix'><span className='as'><AttachMoneyIcon color="secondary"/>From</span> ${activitiee.prix}</div>
          </div>
          
          
          
            
          </div>
          
          </div>
          </Card>
             </div>
          
           ))
         
          }
      </div>
     
    );
  }
  
  export default Dest;
  