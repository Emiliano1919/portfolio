import './App.css'
import {Routes,Route} from 'react-router-dom'
import Contact from './assets/pages/Contact.jsx';
import About from './assets/pages/About.jsx';
import NavBar from './assets/pages/NavBar.jsx';
import Projects from './assets/pages/Projects.jsx';
import NotFound from './assets/pages/NotFound.jsx';
import HomePage from './assets/pages/HomePage.jsx';
import Charlotte from './assets/pages/Charlotte.jsx';


function App() {
  return(
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Charlotte' element={<Charlotte/>}/>
      <Route path='/*' element={<NotFound/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App;