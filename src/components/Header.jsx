import React from 'react'
import Logo from '../assets/img/logo.svg'
import '../assets/styles/Header.css'

const Header = ({text}) => {
  return (
    <header className='header'>
        <div className='container flex'>
            <a className='logo ' href="/">
                <img src={Logo} alt="Logo the of The Movie Double Black " />
            </a>
            <a className='btn-header' href="/">{text}</a>
        </div>
        
        <nav className='main-title'>
            <h1>The Movie Double Black</h1>
        </nav>
    </header>
  )
}

export default Header