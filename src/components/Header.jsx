import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { setSection } from '../actions'
import '../assets/styles/components/Header.css'
// import Logo from '../assets/static/images/'

const Header = () => {
  // const { user, cart, header } = useSelector((state) => { ...state });
  const sectionActive = useSelector((state) => state.sectionActive);
  const dispatch = useDispatch();

  const handleSetSection = (section) => {
      dispatch()
  };
  return (
    <header className='header'>
      <figure>
        <h1 className='title'>CRYPTO</h1>
      </figure>
      <nav>
        <ul className='header-nav'>
          <li
            onClick={() => handleSetSection("Coins")}
            className=''  
          >
            <Link className='link' to="/">Coins</Link>
          </li>
          <li
            onClick={() => handleSetSection("Favorites")}
            className=''  
          >
            <Link className='link' to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header