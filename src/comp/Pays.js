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
function dest() {
    const activities=[
        {
          name: "The Best of Rio de Janeiro in a Private Guided Tour",
          prix: 864,
          rate: 5,
          reviews:32,
          image : <img src={privateguided} alt="privateguided" className='privateguided' />,
          description:"Take your Rio de Janeiro sightseeing experience into your own hands on this customizable, private tour of the Marvelous City. Alongside a ‘carioca’ (Rio de Janeiro resident) and personal driver, tick off top Rio attractions chosen by you. Personalize your itinerary according to your interests and only visit the sites you wish to see: your guide tailors the tour according to preferred themes, such as food, history, or sport, and offers undivided attention throughout. Pickup and drop-off from your Rio de Janeiro hotel are included."
        },
        {
          name: "Discover Petropolis and its Hidden Gems with our Private Tour",
          prix: 699,
          rate: 5,
          reviews:24,
          image : <img src={discoverpetropolis} alt="discoverpetropolis" className='discoverpetropolis' />,
          description:"Get to know Petrópolis, the Imperial City of the State of Rio de Janeiro, during this private tour from Rio. Following hotel pickup, travel in a private vehicle through Serra dos Órgãos National Park, stopping for great photo ops along the way. Tour the Quitandinha Palace and the Imperial Museum to get a sense of the region's history. Stop for a traditional Brazilian lunch, then take a walking tour of the historic streets lined with examples of architecture from different eras."

        },
        {
            name: "Private Custom Full-Day in Rio including Christ, Sugar Loaf",
            prix: 699,
            rate: 5,
            reviews:135,
            image : <img src={privatecustom} alt="privatecustom" className='privatecustom' />,
            description:"A flexible itinerary ensures a customizable experience during this private sightseeing tour of Rio de Janeiro. Your private group can choose to focus on nature or history, with either a driver-guide or a separate guide and driver. Choose from highlights such as Sugar Loaf Mountain, Christ the Redeemer, and the Selaron Steps. History buffs can explore the historic city center while nature lovers may opt to visit Tijuca Forest."

          },
    ];
    const paystours=[
      {
        name: "TUN - GIG avec Air France",
        prix: 607,
        date:"jeu. 20 avr.",
        nbescale:1,
      },
      {
        name: "TUN - GIG avec Lufthansa",
        prix: 693,
        date:"mer. 2 nov.",
        nbescale:1,
      },
      {
          name: "TUN - GIG avec Air France",
          prix: 711,
          date:"jeu. 6 oct.",
          nbescale:1,
        },
  ];
    
    return (
     <div>
        <div className="descriptionC">
       <div><h1>Why Go To Rio de Janeiro</h1></div>
       <div className="descp">Known as the Cidade Maravilhosa (Marvelous City), this glimmering Brazilian metropolis has certainly earned its title. Resting at the mouth of a bay harbor, the city is lined with white-sand beaches, lush rainforests and surrounded by staggered green mountains. Rio de Janeiro boasts dramatic views from nearly every angle. From the slopes of Corcovado Mountain, you'll admire the striking 125-foot-tall Christ the Redeemer, who overlooks Rio's pristine beaches. And from the shores of Copacabana and Ipanema, you'll admire the picture-perfect backdrop that has attracted Cariocas (native Brazilians born in Rio de Janeiro) and visitors alike for more than 500 years.<br/><br/>

But there's much more to Rio than scenic vistas, tropical rainforests and cerulean seas. Here, glitz, high fashion and a laid-back attitude dominate the city's character. Stroll along Avenida Atlântica in Copa, and you'll find a city brimming with bikini-clad beachgoers. The city is also known for its love of sport. From Maracana Stadium (home of the 2014 World Cup finals and the 2016 Olympic Games) to the volleyball courts of Flamengo Park, the city is alive with activity. At night, you'll hear the soothing sounds of samba pulsating through the city streets in Lapa. And if you visit in February — just in time for Carnival — you'll witness Brazil's vibrant Portuguese masquerade that draws revelers from across the globe.<br/><br/> 

Note: Rio de Janeiro isn't without its share of problems. Outside of tourist areas, the city includes large shantytowns, known as favelas, where about 130,000 people live in poverty. In recent years, large efforts have been made to rid the areas of crime, but some parts remain unsafe. There are also ongoing protests and demonstrations in Rio de Janeiro. Visitors should avoid all demonstrations and consult the U.S. Department of State's website for the most up-to-date travel advisories. </div>
     <div><h2>Best Hotels in Rio de Janeiro</h2></div>
      <div className="Hotels">
      <div>Blue Tree Premium Design Rio de Janeiro</div>
      <div>Promenade Link Stay</div>
      <div>Novotel Rio De Janeiro Barra Da Tijuca</div>
      </div>
      <div><h2>Best Things to Do in Rio de Janeiro</h2></div>
      <div className="ThingsToDo">
      <div>#1 Christ the Redeemer</div>
      <div>#2 Jardim Botânico</div>
      <div>#3 Tijuca National Park</div>
      </div>
        
      <div><h2>Cheap flight deals to Rio de Janeiro</h2></div>
      </div>
      <div className="Cards">
      {
        paystours.map(paystour=>(
            <Card sx={{ maxWidth: 345 }}>
            <CardContent>
            <div>
              <div className="VolCardContent">
             <div><FlightTakeoffIcon /></div>
             <div>
              <div>{paystour.date}</div>
              <div>{paystour.name}</div>
             </div>
             <div>{paystour.nbescale} escale(s)</div>
            </div>
            <div className='Prixvol'><span className='a'>    From   </span>   ${paystour.prix}<ArrowForwardIosIcon fontSize="10"/></div>
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
        activities.map(activitie=>(
          <div className="act">
          <Card sx={{ maxWidth: 900 }}>
          <div className="contentCard">
          <div className='CardsImage'>
           <CardMedia width="600" >
           {activitie.image}
           </CardMedia>
          </div>
          <div className="Des">
           <div className="Flex-top">
            <div className="TitleCardactivite">
            {activitie.name}
            </div>
          </div>
          <div className="rating"><div><Rating name="read-only"  value={activitie.rate} readOnly /><span className='a'>({activitie.reviews} reviews)</span></div></div>
          <div className="DescriptionCardactivite">
          {activitie.description}
          </div>
          <div>
          <div className='CardsPrix'><span className='as'><AttachMoneyIcon color="secondary"/>From</span> ${activitie.prix}</div>
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
  
  export default dest;
  