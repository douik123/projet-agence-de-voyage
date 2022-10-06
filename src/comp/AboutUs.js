import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ImgPlane from '../assets/plane.png'
function About() {

    return (
     <div className='AboutUs'>
        <div>
            <div className='titre'><h2>BELIEVE IN AIRDOUIK</h2></div>
            <hr className="new1"/>
            <div className='DescriptionAbout'>
                <p>
                Aujourd’hui, TRAVELTODO est comblée au quotidien par ses milliers de clients et ses collaborateurs. Mais sa plus grande fierté est d’avoir suscité les vocations de tout un secteur et de concurrents…fort d’avoir été les premiers à avoir cru et avoir amorcé la révolution du « e-tourisme » en Tunisie.Et cette empreinte historique nous donne des devoirs, celle de continuer à exercer notre leadership au service du pays dans une période troublée et capitale pour le tourisme national. Nous répondrons présent et nous assumerons sans renier les valeurs qui ont fait notre petite histoire : ''AMOUR'' de nos clients, Management ''BIENVEILLANT'', RIGUEUR et TRANSPARENCE.
                </p>
                <h3>Ceo&Founder</h3>
                <h5>Douik Ahmed</h5>
            </div>
            <hr className="new2"/>
            <div className='titre'><h2>NOTRE HISTOIRE</h2></div>
            <hr className="new1"/>
            <div>
                <h3>Air Douik nait de l’envie d’associer les compétences en santé et de les placer au service des entreprises.</h3>
            </div>
            <ol className='liste'>
                <li><b>2018</b> : Douik rencontre Ahmed, kiné et féru de statistiques. Ensemble, accompagnés de 5 autres experts, ils développent le questionnaire PREDICTA et créent l’algorithme… Il ne reste plus qu’à le transformer en un logiciel… ok mais par qui ?</li>
                <li><b>2020</b> : Après une trêve hivernale de 2 ans, juste avant que la COVID ne pointe son nez, Douik et Ahmed rencontrent Mariem, développeur fullstack. C’est le début du développement informatique de PREDICTA.</li>
                <li><b>2022</b> : Air Douik propose la première version de AIRDOUIK en entreprise</li>
            </ol>
            <hr className="new2"/>
            <h2 className='titre'>Contact Info</h2>
            <hr className="new1"/>
<div className='ContactUs'><FacebookIcon className='icon'/><a href="https://www.facebook.com/ahmed.douik.7/" target="_blank"><h2>Douik Food</h2></a></div>
<div className='ContactUs'><InstagramIcon className='icon'/><a href="https://www.instagram.com/douik_ahmed/" target="_blank"><h2>Douik_Food12</h2></a></div>
        </div>
     </div>
    );
  }
  
  export default About;
  