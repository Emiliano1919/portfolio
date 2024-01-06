import {Link} from 'react-router-dom'
import './styles.css'
function NavBar() {
  return(
    <nav className="nav">
      <div className="site-title">Emiliano Jimenez</div>
      <ul>
        <li>
          <Link to='portfolio/'>Main</Link>
        </li>
        <li>
          <Link to='portfolio/Projects'>Projects</Link>
        </li>
        <li>
          <Link to='portfolio/About'>About</Link>
        </li>
        <li>
          <Link to='portfolio/Contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
