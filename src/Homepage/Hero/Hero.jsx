import { Link } from 'react-router-dom'
import './Hero.css'
import resImage from './Assets/restauranfood.png'

export default function Hero() {
  return (
    <div className='Hero'>
        <section className='hero-1'>
            <h1>Little Lemon </h1>
            <h2>Chicago</h2>
            <p>We’re a family owned Mediterranean restaurant focused on traditional recipes, serves with a modern twist</p>
            <Link to="/booking"><button>Reserve a Table</button></Link>
        </section>
        <section className='Hero-img'>
            <img src={resImage} alt="" />
        </section>
    </div>
  )
}
