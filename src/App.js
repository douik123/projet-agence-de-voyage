import './App.css';
import Navbar from './layout/NavBar.js'
import Home from './comp/Home.js'
import {Routes ,Route} from 'react-router-dom'
import Dest from './comp/Dest.js'
import Africa from './comp/Countries/africa.js'
import America from './comp/Countries/america.js'
import Asia from './comp/Countries/asia.js'

function App() {

  return (
   <div>
   <Navbar/>
   <Routes>
   <Route exact path='/' element={<Home/>}/>
   <Route exact path='/Dest' element={<Dest/>}/>
   <Route exact path='/Africa' element={<Africa/>}/>
   <Route path="/des/:link">
       <Asia/>
      </Route>
   <Route exact path='/America' element={<America/>}/>
   </Routes>
   </div>
  );
}

export default App;
