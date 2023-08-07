import { Link } from 'react-router-dom'
import './Specials.css'
import bruchetta from './Assets/bruchetta.svg'
import greekSalad from './Assets/greek salad.jpg'
import lemonDessert from './Assets/lemon dessert.jpg'

export default function Specials() {
  return (
    <div className='specials'>
        <section className='specials-1'>
            <h1>Specials for the week</h1>
            <Link to=""><button>Reserve a Table</button></Link>
        </section>
        <section className='specials-2'>
            <div className='card'>
                <img src={bruchetta} alt="bruchetta" />
                <div className='greek'>
                    <h2>Greek salad</h2>
                    <span>$12.99</span>
                </div>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <div>
                <Link to=""><button>Order a delivery</button></Link>

                </div>
            </div>

            <div className='card'>
                <img src={greekSalad} alt="bruchetta" />
                <div className='greek'>
                    <h2>Greek salad</h2>
                    <span>$12.99</span>
                </div>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <div>
                <Link to=""><button>Order a delivery</button></Link>

                </div>
            </div>

            <div className='card'>
                <img src={lemonDessert} alt="bruchetta" />
                <div className='greek'>
                    <h2>Greek salad</h2>
                    <span>$12.99</span>
                </div>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <div>
                <Link to=""><button>Order a delivery</button></Link>

                </div>
            </div>
        </section>
    </div>
  )
}
