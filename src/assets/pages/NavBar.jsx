import {Link} from 'react-router-dom'
import './NavBar.css'
function NavBar() {
  return(
    <nav className="nav">
      <div className="site-title">Emiliano Jimenez</div>
      <ul>
        <li>
          <Link to='/'>Main</Link>
        </li>
        <li>
          <Link to='/Projects'>Projects</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
        <li>
          <Link to='/Contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
