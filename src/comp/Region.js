import { useParams } from "react-router-dom";
import Card from "./Card.js"
function Dest({paysinfo}) {
   const {link}=useParams()
   return (
      <div>
         <div className="TitleHome">{link} Tours</div>
      <div className="Cards">
        { 
        paysinfo.filter((val)=>
          val.region===link
        )
        .map(info=>(
         
         <Card tour={info}/>
       
        ))
      }
      </div>
      </div>
    );
  }
  export default Dest;
  