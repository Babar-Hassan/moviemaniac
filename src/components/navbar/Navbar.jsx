import React from 'react'
import './navbar.css'
import Fire from '../../assets/fire.png'
import Star from '../../assets/glowing-star.png'
import Party from '../../assets/partying-face.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>MovieManiac</h1>
      <div className='navbar_links'>
        <a href="#popular">
          Popular <img src={Fire} alt="Fire" className="navbar_emoji"/>
        </a>
        <a href="#top_rated">
          Top Rated <img src={Star} alt="Star" className="navbar_emoji"/>
        </a>
        <a href="#upcoming">
          Upcoming <img src={Party} alt="Party" className="navbar_emoji"/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
