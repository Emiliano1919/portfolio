import './App.css'
import {Routes,Route} from 'react-router-dom'
import GenerativeArt from './assets/pages/GenerativeArt.jsx';
import Contact from './assets/pages/Contact.jsx';
import About from './assets/pages/About.jsx';
import NavBar from './assets/pages/NavBar.jsx';
import Projects from './assets/pages/Projects.jsx';
import NotFound from './assets/pages/NotFound.jsx';


function App() {
  return(
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<GenerativeArt/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App;