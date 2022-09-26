import south from './assets/southafrica.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import egypte from './assets/egyptee.png'
import ethiopia from './assets/ethiopia.png'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CardC from './comp/card.js'
function Dest() {
  const[tours,setTours]= useState([
    {
    name: "South Africa",
    description:"South Africa, the southernmost country on the African continent, renowned for its varied topography, great natural beauty, and cultural diversity, all of which have made the country a favoured destination for travelers.",
    prix: 325,
    rate: 3,
    image : <img src={south} alt="South" className='South' />,
    exprix: 390,
    duree: 9,
    id:1,
    },
    {
        name: "Egypte",
        description:"As the meeting point of Africa, the Mediterranean, and the Middle East, Egypt’s significance in the history of mankind is undeniable. Many prehistoric kingdoms once occupied the area.",
        prix: 300,
        rate: 3,
        image : <img src={egypte} alt="egypte" className='egypte' />,
        exprix: 375,
        duree: 7,
        id:2,
    },
    {
        name: "Ethiopia",
        description:"While many African destinations are becoming brimming with tourists, Ethiopia remains unspoiled even today. Its landscape has elements of both tranquility and adventure.",
        prix: 696,
        rate: 5,
        image : <img src={ethiopia} alt="ethiopia" className='ethiopia' />,
        exprix: 557,
        duree: 6,
        id:3,
    },
  ]);
    return (
      <div>
      <div className="TitleHome">Africa Tours</div>

      <div className='Cards'>
      {
          tours.map(tour=>(
              <div>
               <CardC tour={tour}/>
              </div>
            ))
      }
      </div>
     </div>
    );
  }
  
  export default Dest;
  