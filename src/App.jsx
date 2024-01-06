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