import rio from './assets/rio.png'
import { useState } from 'react';
import costa from './assets/costa.png'
import * as React from 'react';
import CardC from './comp/card.js'
function Dest() {
  const[tours,setTours]= useState([
    {
    name: "Rio de Janeiro",
    description:"With its scenic beaches, leafy mountains and lively nightlife, Rio de Janeiro makes for a fun getaway any time of year. Whether you're looking to attend the city's larger-than-life Carnival celebration (which takes place every February) or explore Brazil's gorgeous natural landscape, Rio has it all. While here, don't miss a visit to Christ the Redeemer.",
    prix: 864,
    rate: 4,
    image : <img src={rio} alt="South" className='South' />,
    exprix: 390,
    duree: 6,
    link :'Rio',
    region:'America',
    id:1,
    },
    {
        name: "Costa Rica",
        description:"Costa Rica is a natural wonderland. The tropical country features volcanoes to hike and lush rainforests to traverse on foot or by zip line. Plus, it boasts a refreshingly laid-back culture. Relaxation seekers can immerse themselves in the pura vida lifestyle and bask at the beaches in Guanacaste or along the Nicoya Peninsula's roughly 80 miles of coast. ",
        prix: 699,
        rate: 5,
        image : <img src={costa} alt="egypte" className='egypte' />,
        exprix: 769,
        duree: 4,
        link :'Costa',
        region:'America',
        id:2,
    },
  ]);
    return (
      <div>
      <div className="TitleHome">America Tours</div>

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
  