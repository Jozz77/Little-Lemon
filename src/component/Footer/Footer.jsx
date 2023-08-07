import { Link } from 'react-router-dom'
import FooterLogo from './Assets/Footer Logo.png'
import "./Footer.css"

export default function Footer() {
  return (
    <footer>
      <section className="img">
        <img src={FooterLogo} alt="Footer Logo" />
      </section>
      <section className='navigation'>
        <div>
          <h3>Doormat Navigation</h3>
          <nav>
            <Link to="/" className='link' role='navigation'>Home</Link>
            <Link to="/" className='link' role='navigation'>About</Link>
            <Link to="/" className='link' role='navigation'>Menu</Link>
            <Link to="/booking" className='link' role='navigation'>Reservation</Link>
            <Link to="/" className='link' role='navigation'>Order Online</Link>
            <Link to="/" className='link' role='navigation'>Login</Link>
          </nav>
        </div>

        <div className='contact'>
          <h3>Contact</h3>
          <address>234 Road, Lagos Way.</address>
          <p>+235-9004-994</p>
          <p>littlelemon@gmail.com</p>
        </div>
      </section>
    </footer>
  )
}
