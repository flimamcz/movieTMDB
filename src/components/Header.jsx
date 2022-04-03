import React from 'react'
import Logo from '../assets/img/logo.svg'
import '../assets/styles/Header.css'
import {Link} from 'react-router-dom'

const Header = ({text}) => {
  return (
    <header className='header'>
        <div className='container flex'>
            <Link to={'/'}>
                <img src={Logo} alt="Logo the of The Movie Double Black " />
            </Link>
            <a className='btn-header' href={'https://www.themoviedb.org/'} target="_blank" rel='noopener noreferrer'>{text}</a>
        </div>
        
        <nav className='main-title'>
            <h1>The Movie Double Black</h1>
        </nav>
    </header>
  )
}

export default Header