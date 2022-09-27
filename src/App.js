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
// import Affichageimage from './comp/AffImage.js'

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
       
},
];

  return (
   <div>
   <Navbar/>
   <Routes>
   <Route exact path='/' element={<Home/>}/>
    <Route  path='destination/:link' element={<Region paysinfo={paysinfo}/>}/>
   {/* <Route  path='destination/:region/:link' element={<Affichageimage/>}/> */}
   </Routes>
   </div>
  );
}

export default App;
