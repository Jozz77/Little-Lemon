import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import './Header.css'

export default function Header() {
  return (
    <header>
        <div>
            <img src={Logo} alt="Logo" />
        </div>
        <nav>
            <Link to="/" className='link' role='navigation'>Home</Link>
            <Link to="/useReducer" className='link' role='navigation'>About</Link>
            <Link to="/" className='link' role='navigation'>Menu</Link>
            <Link to="/booking" className='link' role='navigation'>Reservation</Link>
            <Link to="/" className='link' role='navigation'>Order Online</Link>
            <Link to="/" className='link' role='navigation'>Login</Link>
        </nav>
    </header>
  )
}
