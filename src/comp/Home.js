import turquie from '../assets/turquie.png'
import egypte from '../assets/egyptee.png'
import italie from '../assets/italiee.png'
import Card from './CardTour.js'
import {Link} from 'react-router-dom'
import AffichageImage from './AffImage.js'
function App() {
    const tours= [
        {
        name: "Turquie",
        prix: 500,
        rate: 4,
        image : <img src={turquie} alt="turquie" className='turquie' />,
        exprix: 600,
        duree: 5,
        id:1,
        },
        {
            name: "Egypte",
            prix: 300,
            rate: 3,
            image : <img src={egypte} alt="egypte" className='egypte' />,
            exprix: 375,
            duree: 7,
            id:2,
        },
        {
            name: "Italie",
            prix: 645,
            rate: 5,
            image : <img src={italie} alt="italie" className='italie' />,
            exprix: 700,
            duree: 9,
            id:3,
        },
      ];
  return (
   <div>
    <div className="TitleHome">Popular Tours</div>
    <div className="UnderTitleHome"><Link to='/dest'>View All Popular tours</Link></div>
    <div className='Cards'>
    {
        tours.map(tour=>(
            <div>
             <Card tour={tour}/>
            </div>
          ))
    }
    </div>
   </div>
  );
}

export default App;
