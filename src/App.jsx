import './App.css'
import {Routes,Route} from 'react-router-dom'
import GenerativeArt from './pages/GenerativeArt.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import NavBar from './pages/NavBar.jsx';
import Projects from './pages/Projects.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return(
    <>
    <NavBar/>
    <Routes>
      <Route path='portfolio/' element={<GenerativeArt/>}/>
      <Route path='portfolio/Contact' element={<Contact/>}/>
      <Route path='portfolio/About' element={<About/>}/>
      <Route path='portfolio/Projects' element={<Projects/>}/>
      <Route path='portfolio/*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App;