import './App.css';
import Navbar from './layout/NavBar.js'
import Home from './comp/Home.js'
import {Routes ,Route} from 'react-router-dom'
import egypte from './assets/egyptee.png'
import ethiopia from './assets/ethiopia.png'
import south from './assets/southafrica.png'
import costa from './assets/costa.png'
import rio from './assets/rio.png'
import Region from './comp/Region.js'
import Pays from './comp/Pays'
import Contact from './comp/contact.js'
import privateguided from "./assets/privateguided.png"
import discoverpetropolis from "./assets/discoverpetropolis.png"
import privatecustom from "./assets/privatecustom.png"

function App() {
  const paysinfo=[
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
      hotel:""

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
      hotel:""
   
    },
    {
      name: "South Africa",
      description:"South Africa, the southernmost country on the African continent, renowned for its varied topography, great natural beauty, and cultural diversity, all of which have made the country a favoured destination for travelers.",
      prix: 325,
      rate: 3,
      image : <img src={south} alt="South" className='South' />,
      exprix: 390,
      duree: 9,
      link :'South_Africa',
      region:'Africa',
      hotel:""
 
    },
    {
      name: "Egypte",
      description:"As the meeting point of Africa, the Mediterranean, and the Middle East, Egypt’s significance in the history of mankind is undeniable. Many prehistoric kingdoms once occupied the area.",
      prix: 300,
      rate: 3,
      image : <img src={egypte} alt="egypte" className='egypte' />,
      exprix: 375,
      duree: 7,
      link :'Egypte',
      region:'Africa',
      hotel:""
        
  },
  {
    name: "Ethiopia",
    description:"While many African destinations are becoming brimming with tourists, Ethiopia remains unspoiled even today. Its landscape has elements of both tranquility and adventure.",
    prix: 696,
    rate: 5,
    image : <img src={ethiopia} alt="ethiopia" className='ethiopia' />,
    exprix: 557,
    duree: 6,
    link :'Ethiopia',
    region:'Africa',
    hotel:""  ,     
},
];
    const images = [
      {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        paysname:"Rio",
      },
      {
        label: 'Bird',
        src:
          'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
          paysname:"Rio",
        },

      {
        label: 'Bali, Indonesia',
        src:
          'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
          paysname:"Rio",
      },
      {
        label: 'Goč, Serbia',
        src:
          'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
          paysname:"Rio",
      },
    ];

  const activities=[
    {
      name: "The Best of Rio de Janeiro in a Private Guided Tour",
      prix: 864,
      rate: 5,
      reviews:32,
      image : <img src={privateguided} alt="privateguided" className='privateguided' />,
      description:"Take your Rio de Janeiro sightseeing experience into your own hands on this customizable, private tour of the Marvelous City. Alongside a ‘carioca’ (Rio de Janeiro resident) and personal driver, tick off top Rio attractions chosen by you. Personalize your itinerary according to your interests and only visit the sites you wish to see: your guide tailors the tour according to preferred themes, such as food, history, or sport, and offers undivided attention throughout. Pickup and drop-off from your Rio de Janeiro hotel are included.",
      paysname:"Rio",
    },
    {
      name: "Discover Petropolis and its Hidden Gems with our Private Tour",
      prix: 699,
      rate: 5,
      reviews:24,
      image : <img src={discoverpetropolis} alt="discoverpetropolis" className='discoverpetropolis' />,
      description:"Get to know Petrópolis, the Imperial City of the State of Rio de Janeiro, during this private tour from Rio. Following hotel pickup, travel in a private vehicle through Serra dos Órgãos National Park, stopping for great photo ops along the way. Tour the Quitandinha Palace and the Imperial Museum to get a sense of the region's history. Stop for a traditional Brazilian lunch, then take a walking tour of the historic streets lined with examples of architecture from different eras.",
      paysname:"Rio",
    },
    {
        name: "Private Custom Full-Day in Rio including Christ, Sugar Loaf",
        prix: 699,
        rate: 5,
        reviews:135,
        image : <img src={privatecustom} alt="privatecustom" className='privatecustom' />,
        description:"A flexible itinerary ensures a customizable experience during this private sightseeing tour of Rio de Janeiro. Your private group can choose to focus on nature or history, with either a driver-guide or a separate guide and driver. Choose from highlights such as Sugar Loaf Mountain, Christ the Redeemer, and the Selaron Steps. History buffs can explore the historic city center while nature lovers may opt to visit Tijuca Forest.",
        paysname:"Rio",
      },
      {
        name: "eeeeeeeeeeeeeeeeeeeeeeeeeee",
        prix: 864,
        rate: 5,
        reviews:32,
        image : <img src={privateguided} alt="privateguided" className='privateguided' />,
        description:"Take your Rio de Janeiro sightseeing experience into your own hands on this customizable, private tour of the Marvelous City. Alongside a ‘carioca’ (Rio de Janeiro resident) and personal driver, tick off top Rio attractions chosen by you. Personalize your itinerary according to your interests and only visit the sites you wish to see: your guide tailors the tour according to preferred themes, such as food, history, or sport, and offers undivided attention throughout. Pickup and drop-off from your Rio de Janeiro hotel are included.",
        paysname:"Costa",
      },
];
const image = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
    'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    paysname:"rio",
  },
  {
    label: 'Bird',
    src:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      paysname:"rio",
    },

  {
    label: 'Bali, Indonesia',
    src:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
      paysname:"rio",
  },
  {
    label: 'Goč, Serbia',
    src:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
      paysname:"rio",
  },
];
const paystours=[
  {
    name: "TUN - GIG avec Air France",
    prix: 607,
    date:"jeu. 20 avr.",
    paysname:"Rio",
  },
  {
    name: "TUN - GIG avec Lufthansa",
    prix: 693,
    date:"mer. 2 nov.",
    paysname:"Rio",
  },
  {
      name: "TUN - GIG avec Air France",
      prix: 711,
      date:"jeu. 6 oct.",
      paysname:"Rio",
    },
    {
      name: "eeeeeeeeeeee",
      prix: 607,
      date:"eeeeeeeeeee",
      paysname:"Costa",
    },
    {
      name: "eeeeeeeeeeeeeee",
      prix: 693,
      date:"eeeeeeeeeeeeeeee",
      paysname:"Costa",
    },
];
const infopays=[
  {
    name: "Rio de Janeiro",
    link:"Rio",
    description:"Known as the Cidade Maravilhosa (Marvelous City), this glimmering Brazilian metropolis has certainly earned its title. Resting at the mouth of a bay harbor, the city is lined with white-sand beaches, lush rainforests and surrounded by staggered green mountains. Rio de Janeiro boasts dramatic views from nearly every angle. From the slopes of Corcovado Mountain, you'll admire the striking 125-foot-tall Christ the Redeemer, who overlooks Rio's pristine beaches. And from the shores of Copacabana and Ipanema, you'll admire the picture-perfect backdrop that has attracted Cariocas (native Brazilians born in Rio de Janeiro) and visitors alike for more than 500 years. But there's much more to Rio than scenic vistas, tropical rainforests and cerulean seas. Here, glitz, high fashion and a laid-back attitude dominate the city's character. Stroll along Avenida Atlântica in Copa, and you'll find a city brimming with bikini-clad beachgoers. The city is also known for its love of sport. From Maracana Stadium (home of the 2014 World Cup finals and the 2016 Olympic Games) to the volleyball courts of Flamengo Park, the city is alive with activity. At night, you'll hear the soothing sounds of samba pulsating through the city streets in Lapa. And if you visit in February — just in time for Carnival — you'll witness Brazil's vibrant Portuguese masquerade that draws revelers from across the globe. Note: Rio de Janeiro isn't without its share of problems. Outside of tourist areas, the city includes large shantytowns, known as favelas, where about 130,000 people live in poverty. In recent years, large efforts have been made to rid the areas of crime, but some parts remain unsafe.",
  },
  {
    name: "Costa rica",
    link:"Costa",
    description:"eeeeeee",
  },
  {
    name: "Rio de Janeiro",
    link:"e",
    description:"Known as the Cidade Maravilhosa (Marvelous City), this glimmering Brazilian metropolis has certainly earned its title. Resting at the mouth of a bay harbor, the city is lined with white-sand beaches, lush rainforests and surrounded by staggered green mountains. Rio de Janeiro boasts dramatic views from nearly every angle. From the slopes of Corcovado Mountain, you'll admire the striking 125-foot-tall Christ the Redeemer, who overlooks Rio's pristine beaches. And from the shores of Copacabana and Ipanema, you'll admire the picture-perfect backdrop that has attracted Cariocas (native Brazilians born in Rio de Janeiro) and visitors alike for more than 500 years. But there's much more to Rio than scenic vistas, tropical rainforests and cerulean seas. Here, glitz, high fashion and a laid-back attitude dominate the city's character. Stroll along Avenida Atlântica in Copa, and you'll find a city brimming with bikini-clad beachgoers. The city is also known for its love of sport. From Maracana Stadium (home of the 2014 World Cup finals and the 2016 Olympic Games) to the volleyball courts of Flamengo Park, the city is alive with activity. At night, you'll hear the soothing sounds of samba pulsating through the city streets in Lapa. And if you visit in February — just in time for Carnival — you'll witness Brazil's vibrant Portuguese masquerade that draws revelers from across the globe. Note: Rio de Janeiro isn't without its share of problems. Outside of tourist areas, the city includes large shantytowns, known as favelas, where about 130,000 people live in poverty. In recent years, large efforts have been made to rid the areas of crime, but some parts remain unsafe.",
    },
];
const hotels=[
  {
    link:"Rio",
    description:"Blue Tree Premium Design Rio de Janeiro",
    },
  {
    link:"Rio",
    description:"Promenade Link Stay", 
   },
  {
    link:"Rio",
    description:"Novotel Rio De Janeiro Barra Da Tijuca",
    },
];
const thingstodo=[
  {
    link:"Rio",
    description:"Christ the Redeemer", 
   },
  {
    link:"Rio",
    description:"Jardim Botânico",  
  },
  {
    link:"Rio",
    description:"Tijuca National Park",  
    },
];


    

  return (
   <div>
   <Navbar/>
   <Routes>
   <Route exact path='/' element={<Home/>}/>
   <Route  path='destination/:link' element={<Region paysinfo={paysinfo}/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route  path='destination/:region/:link' element={<Pays paystours={paystours} activities={activities} images={image} infopays={infopays} hotels={hotels} thingstodo={thingstodo} />}/>
   </Routes>
   </div>
  );
}

export default App;
